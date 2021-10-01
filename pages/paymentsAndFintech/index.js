import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { Text } from '../../util/gargenUtil';
import styles from './index.module.css'
import Layout from '../Layout';

export const databaseId = process.env.NOTION_PAYMENTS_BLOG_ID;

export default function Home({ posts }) {
  return (
    <Layout>

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
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/paymentsAndFintech/${post.id}`}>
                  <a> Read post →</a>
                </Link>
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