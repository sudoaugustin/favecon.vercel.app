import Link from 'next/link';
import Logo from '@components/Logo';

const Header = ({ links, classes = {} }) => (
  <header className={`w-full flex justify-between items-center ${classes.root}`}>
    <Link href='/'>
      <p className='cursor-pointer'>
        <Logo />
      </p>
    </Link>
    <ul className='flex items-center space-x-6 md:space-x-8'>
      {links.map(({ label, link }, key) => (
        <Link href={link} key={key}>
          <li
            className={`text-gray-500 hover:text-gray-900 font-medium transition duration-300 cursor-pointer ${classes.link}`}>
            {label}
          </li>
        </Link>
      ))}
    </ul>
  </header>
);

export default Header;
