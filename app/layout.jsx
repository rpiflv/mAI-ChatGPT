import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

// export const metadata = {
//     title: "mAIChatGPT",
//     description: "Discover and Share AI Prompts",
//     image: 'https://sustpage123333.s3.ap-southeast-2.amazonaws.com/logo.png',
//     icons: {
//         icon: '/assets/icons/favicon.ico',
//       },
// }

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width' />
            <meta name="robots" content="index, follow"/>
            {/* <meta name='keywords' content='content keywords' /> */}
            {/* <meta name='author' content='Flavio Ripa' /> */}
            {/* <meta name='robots' content='index, follow' /> */}
            <meta name='description' content="Discover and share AI prompts with your community. Learn new tips and tricks to improve your productivity. Engage with others and expand your knowledge on various topics. Join us now and start your learning journey." /> 
            <meta property='og:description' content="Discover and share AI prompts with your community. Learn new tips and tricks to improve your productivity. Engage with others and expand your knowledge on various topics. Join us now and start your learning journey." /> 
            <meta name="next-head-count" content="8"/>
            <meta property="og:title" content="My prompts" />
            <meta property='og:image' name="image" content='https://sustpage123333.s3.ap-southeast-2.amazonaws.com/logo.png' />
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