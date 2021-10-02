import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { Text } from '../../util/gargenUtil';
import styles from './index.module.css'
import Layout from '../Layout';

export const databaseId = process.env.NOTION_PAYMENTS_BLOG_ID;

export default function Home({ posts }) {
  return (
    <Layout pageTitle="India's Digital Payments & FinTech" description="Everything about digital payments, products, processes and FinTechs in a digitally enabled Indian ecosystem.">

      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Demystifying India's Digital Payments & FinTech</h1>
          <p>
            This is an attempt to destructure the digital payments and fintech space and learn bit by bit. Everything about digital payments, products, processes and stakeholders that colloratively are working for a digitally enabled India.
          </p>
        </header>

        <h2 className={styles.heading}>All Posts</h2>
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
                  <Link href={`/paymentsAndFintech/${post.id}`}>
                    <a className={styles.link}>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"> 
                       <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/>
                    </svg>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                {/* <p className={styles.postDescription}>{date}</p>
                <Link href={`/paymentsAndFintech/${post.id}`}>
                  <a> Read post →</a>
                </Link> */}
              </li>
            );
          })}
        </ol>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};