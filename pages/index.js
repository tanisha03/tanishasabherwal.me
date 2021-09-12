import Layout from './Layout';

export default function Home() {
  return (
    <Layout title="Tanisha Sabherwal">
          <div>
                <h1>Hi 👋 I am Tanisha !</h1>
                <p>This site is currently a WIP</p>
                {/* {
                    ABOUT_DATA.description.map(paragraph=>(
                        <>
                            <p>{paragraph}</p><br/>
                        </>
                    ))
                }
                <p>If you would like to know more about me, feel free to <a href="https://twitter.com/tanishaaa03">connect on twitter</a>.</p><br/>
                <DownloadLink href={ABOUT_DATA.resume} download>
                    Download Resume {Icons.download}
                </DownloadLink> */}
            </div>
    </Layout>
  )
}
