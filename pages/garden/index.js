import Layout from '../Layout';
import { getDatabase } from "../../lib/notion";
import Link from "next/link";
import styles from './index.module.css'
import { HeaderContainer, FilterSection, TopicsSection, GardenContainer } from '../../components/common';
import {tokens} from "../../config/themes"
import { transformGardenQuery, extractTopicsFromGardenQuery} from '../../util/gargenUtil';
import {dateFormatter} from '../../util/common';

export const databaseId = process.env.NOTION_DATABASE_ID;


export default function Garden({posts}) {
  var growthStage = tokens.terms.garden,
        gardenQuery = transformGardenQuery(posts);
  var gardenTopics = extractTopicsFromGardenQuery(posts);
  console.log(posts,gardenTopics);


  const handleStateFilter = (key) => {
    const filteredCards = gardenQuery.edges.filter(card=>{
      return card.node.frontmatter.growthStage === key
    });

    setGardenNotes(filteredCards);
  };

  const handleTopicFilter = (topic) => {

    if(topic==="All") {
      setGardenNotes(gardenQuery.edges);
      return;
    }

    const filteredCards = gardenQuery.edges.filter(card=>{
      return card.node.frontmatter.topics.includes(topic);
    });

    setGardenNotes(filteredCards);
  };


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
      <GardenContainer>
        {
          gardenQuery && gardenQuery.map(post=>(
            <Link href={post.url}>
              <GardenContainer.GardenCard>
                {/* <div className="garden-title"> <Text text={post.properties.Name.title} /></div> */}
                <div>{post.title}</div>
                <div className="footer_notes">
                  <span>{dateFormatter(post.editedAt)}</span>
                  <span className="level">{growthStage[post.growthStage].label} {growthStage[post.growthStage].icon}</span>
                </div>
              </GardenContainer.GardenCard>
            </Link>
          ))
        }
      </GardenContainer>
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
