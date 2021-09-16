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
    <Layout title="Tanisha Sabherwal">
        <HomeContainer>
          <section>
                <h1>Hi 👋 I am Tanisha!</h1>
                <p>I read, make, and love random things</p>
            </section>
            <section>
                <h2>CURRENTLY: </h2>
                <p>Doing something Frontend at <Link href="https://www.jpmorganchase.com/">JP Morgan Chase & Co.</Link></p>
                <p>Attempting to build habits with <Link href="https://tanishasabherwal.notion.site/Tanisha-s-100-days-of-writing-d6381dcb43f04567852725e7d6bf9410">100 days of writing.</Link></p>
            </section>
            <section>
                <h2>ALSO, </h2>
                <p>Organize <Link href="https://www.helloa11y.com/">HelloA11Y</Link> and write at <Link href="https://a11y-friendly.netlify.app/">A11y-friendly</Link></p>
                <p>When I am away from my screen, I read books, play my favourite chords on uklele, paint and love to do DIYs.</p>
            </section>
        </HomeContainer>
    </Layout>
  )
}