import Head from 'next/head';
import Hero from '@layouts/Hero';
import Footer from '@layouts/Footer';
import Report from '@layouts/Report';
import Preview from '@layouts/Preview';
import Header from '@components/Header';

const Home = () => (
  <>
    <Head>
      <title>Favecon - Get best quality favicons of any website</title>
      <meta
        name='description'
        content='Most APIs give old or low quality favicons. Fetch live and high quality favicons of websites using favecon from own server or client devices.'></meta>
    </Head>
    <div className='p-4 md:p-8 space-y-8 md:space-y-16 lg:space-y-20'>
      <Header
        links={[
          {
            label: (
              <>
                <span className='hidden md:inline'>Documentation</span>
                <span className='md:hidden'>Docs</span>
              </>
            ),
            link: '/docs/installation',
          },
        ]}
        classes={{
          root: 'border-b md:border-none pb-4 md:pb-0',
          link: 'mt-[2.5px] md:after:block after:transition after:duration-500 after:h-[2.5px] after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100',
        }}
      />
      <Hero />
      <Preview />
      <Report />
      <Footer />
    </div>
  </>
);

export default Home;
