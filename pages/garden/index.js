import Layout from '../Layout';
import { getDatabase } from "../../lib/notion";
import Link from "next/link";
import styles from './index.module.css'
// import styles from '../../styles/garden.css';

export const databaseId = process.env.NOTION_DATABASE_ID;

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
        >
          {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
        </span>
      );
    });
  };

export default function Garden({posts}) {
  return (
    <Layout title="Garden">
      <main className={styles.main}>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/garden/${post.id}`}>
                    <a>
                        {/* <p>{post.properties.Name.title}</p> */}
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/garden/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
   
      </main>
    </Layout>
  )
};

export const getStaticProps = async () => {
    const database = await getDatabase(databaseId);
  
    return {
      props: {
        posts: database,
      },
      revalidate: 1,
    };
  };
