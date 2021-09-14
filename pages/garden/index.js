import Layout from '../Layout';
import { getDatabase } from "../../lib/notion";
import Link from "next/link";
import styles from './index.module.css'
import { HeaderContainer, FilterSection, TopicsSection } from '../../components/common';
import {tokens} from "../../config/themes"
import {extractTopicsFromGardenQuery} from '../../util/gargenUtil';
// import styles from '../../styles/garden.css';
import styled from 'styled-components';

export const databaseId = process.env.NOTION_DATABASE_ID;

// const HeaderContainer =  styled.div`
// padding:2% 0 4%;
// width:100%;
// h1{
//   font-weight:${tokens.fontWeights.medium};
// }
// p{
//   width:50%;
//   margin-top:${tokens.space[5]};
// }
// @media only screen and (max-width: 768px) {
//      p{
//       width:80%;
//      }
//   }
//   @media only screen and (max-width: 576px) {
//     p{
//      width:100%;
//     }
//  }
// `;

// const FilterSection =  styled.div`
// padding:2% 4% 0 4%;
// display:flex;
// justify-content:flex-end;
// span{
//   margin:0 ${tokens.space[2]};
//   padding:${tokens.space[1]} ${tokens.space[2]};
//   border-radius:5px;
//   cursor:pointer;
//   border:0.5px solid ${tokens.colors.tertiary[3]};
//   &:hover{
//     background-color:${tokens.colors.tertiary[2]};
//     border:0.5px solid ${tokens.colors.tertiary[2]};
//   }
//   @media only screen and (max-width: 576px) {
//     margin:0 ${tokens.space[1]};
//     padding:${tokens.space[1]};
//     text-align:center;
//  }
// }
// `;

// const TopicsSection =  styled.div`
// padding:2% 4% 0 4%;
// display:flex;
// flex-wrap:wrap;
// justify-content:flex-start;
// color:${tokens.colors.tertiary[0]};
// span{
//   margin:0 ${tokens.space[2]};
//   padding:${tokens.space[1]} ${tokens.space[2]};
//   cursor:pointer;
//   &:hover{
//     color:${tokens.colors.primary[1]};
//   }
//   @media only screen and (max-width: 576px) {
//     margin:0 ${tokens.space[1]};
//     padding:${tokens.space[1]};
//     text-align:center;
//  }
// }
// `;

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

export default function Garden({posts}) {
  const growthStage = tokens.terms.garden;
  const gardenTopics = extractTopicsFromGardenQuery(posts);
  console.log(posts,gardenTopics);

  return (
    <Layout title="Garden">
      <HeaderContainer>
        <h1>Digital Garden</h1>
        <p>A personal internet space containing my personal wiki of some loosely knit thoughts, ideas, learnings, and work. Some are as fresh as a sapling, while others are being tendered into flowers but some remain to be forever blooming and evergreen.</p>
      </HeaderContainer>
      <FilterSection>
        {
          Object.entries(growthStage).map(([key,value],k)=>(
            <span role="button" tabIndex="0" key={key} onClick={()=>handleStateFilter(key)} onKeyDown={()=>handleStateFilter(key)}>{value.icon} {value.label}</span>
          ))
        }
      </FilterSection>
      <TopicsSection>
        {
          gardenTopics.map((topic)=>(
            <span role="button" tabIndex="0" key={topic.id} onClick={()=>handleTopicFilter(topic)} onKeyDown={()=>handleTopicFilter(topic)}>{topic}</span>
          ))
        }
      </TopicsSection>
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
                      <Text text={post.properties.Growth.rich_text} />
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
