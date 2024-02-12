import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "mAIChatGPT",
    description: "Discover and Share AI Prompts",
    image: 'https://sustpage123333.s3.ap-southeast-2.amazonaws.com/logo.png',
    icons: {
        icon: '/assets/icons/favicon.ico',
      },
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='description' content="content description" />
            <meta name='keywords' content='content keywords' />
            <meta name='author' content='Flavio Ripa' />
            <meta name='robots' content='index, follow' />
            <meta name='og:title' content="My prompts" />
        </head>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;