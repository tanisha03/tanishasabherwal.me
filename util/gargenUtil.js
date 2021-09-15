const transformGardenQuery = (posts) => {
  let trandformedPosts = [];
  posts.forEach( post => {
    let topicList = post.properties.Tags.multi_select.map( topic => topic.name );
    
    trandformedPosts.push({
      url: `/garden/${post.id}`,
      title: post.properties.Name.title[0].plain_text,
      editedAt: post.last_edited_time,
      growthStage: post.properties.Growth.rich_text[0].plain_text,
      topics: topicList
    });
  });
  
  return trandformedPosts;
}

const extractTopicsFromGardenQuery = (posts) => {
    let topics = ["All"];
    posts.forEach( post => {
      post.properties.Tags.multi_select.map(topic=>topics.push(topic.name));
    });
    topics = [...new Set(topics)];
    return topics;
};

export {
    transformGardenQuery,
    extractTopicsFromGardenQuery
};