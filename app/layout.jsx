import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Head from 'next/head';


export const metadata = {
    title: "mAIChatGPT",
    description: "Dciscover and Share AI Prompts",
    icons: {
        icon: '/assets/icons/favicon.ico',
      },
}



const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                    {/* <Head>
                        <link rel="icon" href="../assets/icons/logo16x16.ico" />
                    </Head> */}
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout