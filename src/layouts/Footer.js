import KhabyIcon from '@icons/Khaby';
import GithubIcon from '@icons/Github';
import SudoLabLogo from '@icons/SudoLab';

const Footer = () => (
  <footer className='border-t border-gray-300 font-semibold flex justify-between items-center pt-4 md:pt-8 lg:pt-10 space-x-2'>
    {/* <-- Left --> */}
    <div className='inline-flex items-end space-x-1.5'>
      <p className='text-gray-600 text-xs font-semibold leading-none tracking-wide'>
        A PROJECT AT{' '}
      </p>
      <a href='https://github.com/sudolab' children={<SudoLabLogo />} />
    </div>
    {/* <-- Right --> */}
    <div className='inline-flex space-x-6'>
      <div className='hidden md:inline-flex items-center space-x-1'>
        <KhabyIcon className='w-8 inline' />
        <span>
          by{' '}
          <a target='_blank' className='text-sky-400' href='https://dribbble.com/AndriiKovalchuk'>
            Andrii Kovalchuk
          </a>
        </span>
      </div>
      <a
        className='text-gray-600 hover:text-gray-400 transition duration-300 inline-block'
        href='https://github.com/sudolab/favecon'>
        <GithubIcon className='w-8' />
      </a>
    </div>
  </footer>
);

export default Footer;
