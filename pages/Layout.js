import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Header from '../components/Header';

const LINKS=[
  {
      icon:'email',
      link:'mailto:tanisha031199@gmail.com'
  },
  {
      icon:'twitter',
      link:'https://twitter.com/tanishaaa03'
  },
  {
      icon:'github',
      link:'https://github.com/tanisha03'
  },
  {
      icon:'medium',
      link:'https://medium.com/@tanisha031199'
  }
];

export default function Home(props) {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>{props.pageTitle}</title>
        <meta name='description' content={props.description}></meta>
+       <meta property='og:title' content={props.pageTitle} key='ogtitle' />
+       <meta property='og:description' content={props.description} key='ogdesc' />
        <meta property='og:url' content='https://tanishasabherwal.me/' />
        <meta property='og:type' content='portfolio website' />
        <meta property='og:image' content='logo.png' key='ogimage' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        <script 
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <Header/>
      
      <main className={styles.main}>
        {props.children}
   
      </main>

      <footer className={styles.footer}>
            <Footer/>
      </footer>

    </div>
  )
}
