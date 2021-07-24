import Head from 'next/head';
import '../tailwind.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/ico/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/ico/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/ico/favicon-16x16.png' />
        <link rel='manifest' href='/ico/site.webmanifest' />
        <link rel='mask-icon' href='/ico/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/ico/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ico/mstile-144x144.png' />
        <meta name='msapplication-config' content='/ico/browserconfig.xml' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400&family=Roboto+Slab:wght@100;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
