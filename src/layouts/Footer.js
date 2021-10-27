import KhabyIcon from '@icons/Khaby';
import GithubIcon from '@icons/Github';
import SudoLabLogo from '@icons/SudoLab';

const Footer = () => (
  <footer className='border-t border-gray-300 font-semibold flex justify-between items-center pt-4 md:pt-8 lg:pt-10 space-x-2'>
    {/* <-- Left --> */}
    <div className='inline-flex items-end space-x-1.5'>
      <p className='text-gray-600 text-xs font-semibold leading-none tracking-wide'>
        A PROJECT BY{' '}
      </p>
      <a href='https://github.com/sudoaugustin' className="font-semibold text-sm text-sky-600 leading-none tracking-wide" >Augustin Joseph</a>
    </div>
    {/* <-- Right --> */}
    <div className='inline-flex space-x-6'>
      <a
        className='text-gray-600 hover:text-gray-400 transition duration-300 inline-block'
        href='https://github.com/sudolab/favecon'>
        <GithubIcon className='w-8' />
      </a>
    </div>
  </footer>
);

export default Footer;
