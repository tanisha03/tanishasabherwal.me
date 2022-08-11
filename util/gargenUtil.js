import styles from '../pages/paymentsEcosystem/post.module.css';

const transformGardenQuery = (posts) => {
  let transformedPosts = [];
  posts.forEach( post => {
    let topicList = post.properties.Tags.multi_select.map( topic => topic.name );
    
    transformedPosts.push({
      url: `/garden/${post.id}`,
      title: post.properties.Name.title[0].plain_text,
      editedAt: post.last_edited_time,
      growthStage: post.properties.Growth.rich_text[0].plain_text,
      topics: topicList
    });
  });
  
  transformedPosts = transformedPosts.sort( (a,b) => new Date(b.editedAt) - new Date(a.editedAt) );
  return transformedPosts;
}

const extractTopicsFromGardenQuery = (posts) => {
    let topics = ["All"];
    posts.forEach( post => {
      post.properties.Tags.multi_select.map(topic=>topics.push(topic.name));
    });
    topics = [...new Set(topics)];
    return topics;
};

const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={value.index}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption.length>0 ? value.caption[0].plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export {
    transformGardenQuery,
    extractTopicsFromGardenQuery,
    renderBlock,
    Text
};