import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import GithubIcon from '@icons/Github';

const paths = {
  installation: '/docs/installation',
  getIcons: '/docs/methods/getIcons',
  getBestIcons: '/docs/methods/getBestIcons',
  getBestIcon: '/docs/methods/getBestIcon',
};

const Installation = dynamic(() => import('@layouts/Docs/Installation'));
const GetIcons = dynamic(() => import('@layouts/Docs/GetIcons'));
const GetBestIcons = dynamic(() => import('@layouts/Docs/GetBestIcons'));
const GetBestIcon = dynamic(() => import('@layouts/Docs/GetBestIcon'));

const Docs = ({ location, component, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
    <div className='space-y-8 pb-8 lg:px-8'>
      <div className='px-4 sm:px-6 lg:px-0 border-b md:sticky top-0 bg-white z-20'>
        <Header
          classes={{ root: 'h-16 lg:h-20' }}
          links={[
            { label: <GithubIcon className='w-8' />, link: 'https://github.com/sudolab/favecon' },
          ]}
        />
      </div>
      <div className='px-4 sm:px-6 lg:px-0'>
        <Navbar
          location={location}
          links={[
            { label: 'Installation', href: paths.installation },
            {
              label: 'Methods',
              links: [
                { label: 'getIcons', href: paths.getIcons },
                { label: 'getBestIcons', href: paths.getBestIcons },
                { label: 'getBestIcon', href: paths.getBestIcon },
              ],
            },
          ]}
        />
        <div className='lg:ml-52 lg:pl-8'>
          <div className='mx-auto prose prose-sky md:prose-lg flex flex-col'>
            {component === 'installation' ? (
              <Installation />
            ) : component === 'getIcons' ? (
              <GetIcons />
            ) : component === 'getBestIcons' ? (
              <GetBestIcons />
            ) : (
              <GetBestIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Docs;

export async function getStaticProps(context) {
  const slug = context.params.slug.join('/');
  const location = `/docs/${slug}`;
  const component = Object.entries(paths).find(([name, path]) => path === location)[0];
  const props = {
    installation: {
      title: 'Docs • Installation',
      description: 'Install favecon with npm or yarn.',
    },
    getIcons: {
      title: 'Docs • getIcons',
      description: 'This method fetch all available favicons from given url.',
    },
    getBestIcons: {
      title: 'Docs • getBestIcons',
      description:
        'This method fetch all available favicons from given url. Then group the fetched icons by rel & select the best icon on each group',
    },
    getBestIcon: {
      title: 'Docs • getBestIcon',
      description: 'This method gives you the best icon (based on size).',
    },
  };

  return {
    props: { location, component, ...props[component] },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.values(paths),
    fallback: true,
  };
}
