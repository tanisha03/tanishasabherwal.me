import Layout from './Layout';
import styled from 'styled-components';
import {tokens} from '../config/themes'
import Link from "next/link";

const HomeContainer = styled.div`
    section{
        margin-bottom:${tokens.space[8]};
        max-width:600px;
        h2{
            font-size:${tokens.fontSizes[4]};
            margin-bottom:${tokens.space[3]};
            color:${tokens.colors.primary[1]};
            font-weight:${tokens.fontWeights.bold};
        }
        p{
            margin-bottom:${tokens.space[6]};
        }
        a{
            color: rgb(53, 104, 207);
            text-decoration: none;
        }
    }
`;

export default function Home() {
  return (
    <Layout pageTitle="Tanisha Sabherwal" description="Hi! I am Tanisha Sabherwal. A software engineer working on frontend, design and products. Connect with me at tanishasabherwal.me">
        <HomeContainer>
          <section>
                <h1>Hi 👋 I am Tanisha!</h1>
                <p>I read, make, and love random things</p>
            </section>
            <section>
                <h2>CURRENTLY: </h2>
                <p>Doing something Frontend at <a target="_blank" href="https://www.gameskraft.com/">Gameskraft</a></p>
                <p>Curating <a target="_blank" href="https://technolawgy.substack.com/">TechnoLawgy</a> as an attempt to destructure the nuances of tech products and the startup space.</p>
                <p>Demystifying India's <a target="_blank" href="https://cartl.club/u/tanisha">digital payments and FinTech</a> space bit by bit.</p>
            </section>
            <section>
                <h2>ALSO, </h2>
                <p>Organize <a target="_blank" href="https://www.reactindia.io/">React India</a>, <a target="_blank" href="https://reactday.in/">React Day Bangalore</a>, and <a target="_blank" href="https://www.helloa11y.com/">HelloA11Y</a> and write at <a target="_blank" href="https://a11y-friendly.netlify.app/">A11y-friendly</a>.</p>
                <p>Learnt the power of compounding and habits with <a target="_blank" href="https://tanishasabherwal.notion.site/Tanisha-s-100-days-of-writing-d6381dcb43f04567852725e7d6bf9410">100 days of writing</a>.</p>
                <p>Probably reading or listening something to feed in my curious brain cells.</p>
            </section>
        </HomeContainer>
    </Layout>
  )
}
