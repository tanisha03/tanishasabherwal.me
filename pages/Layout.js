import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Icons} from '../assets/Icon';

const LINKS=[
  // {
  //     icon:'email',
  //     link:'mailto:tanisha031199@gmail.com'
  // },
  {
      icon:'twitter',
      link:'https://twitter.com/tanishaaa03'
  },
  {
      icon:'github',
      link:'https://github.com/tanisha03'
  },
  // {
  //     icon:'medium',
  //     link:'https://medium.com/@tanisha031199'
  // }
];

export default function Home(props) {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      </Head>

      <nav>
          <Link href="/" aria-label="Tanisha Sabherwal Logo">
            <a>
              <svg width="40" height="40" viewBox="0 0 281 219" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M78.5 211.5V40H18.5L7 5H254L243 40C220.333 36.1667 174.5 32.5 174.5 55.5C174.5 78.5 201.5 88.5 201.5 88.5C201.5 88.5 276 111.5 276 155.479C276 205.639 230.5 218.5 179.5 211.5" stroke="black" strokeWidth="10"/>
              </svg>
            </a>
          </Link>
          {/* <ul>
            <li>Garden</li>
            <li>Talks</li>
          </ul> */}
      </nav>
      
      <main className={styles.main}>
        {props.children}
   
      </main>

      <footer className={styles.footer}>
            <div>
                {
                   LINKS.map(link=>(
                       <Link href={link.link} aria-label={link.icon} target="_blank" rel="noopener">
                           <a>{Icons?.social[link.icon]}</a>
                       </Link>
                   )) 
                } 
            </div>
            © TANISHA SABHERWAL {new Date().getFullYear()}
      </footer>

    </div>
  )
}
