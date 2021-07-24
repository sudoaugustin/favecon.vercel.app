import Link from 'next/link';
import { useState } from 'react';
import XIcon from '@heroicons/react/solid/XIcon';
import MenuIcon from '@heroicons/react/solid/MenuAlt4Icon';
import { Transition } from '@headlessui/react';

const NavbarItem = ({ href, isActive, label, onClick }) => (
  <Link href={href}>
    <li
      onClick={onClick}
      className={`px-3 py-2 font-medium transition-colors duration-200 rounded-md cursor-pointer
      ${isActive ? 'bg-sky-50 text-sky-600' : 'text-gray-500 hover:text-gray-800'}`}>
      {label}
    </li>
  </Link>
);

const NestedNavbarItem = ({ links, label, location, onClick }) => (
  <li className='pt-6'>
    <h5 className='px-3 mb-3 uppercase tracking-wide font-semibold text-sm text-gray-900'>
      {label}
    </h5>
    <NavbarList links={links} location={location} onClick={onClick} />
  </li>
);

const NavbarList = ({ links, location, onClick }) => (
  <ul>
    {links.map((props, key) =>
      props.href ? (
        <NavbarItem onClick={onClick} isActive={props.href === location} {...props} key={key} />
      ) : (
        <NestedNavbarItem {...props} onClick={onClick} location={location} key={key} />
      )
    )}
  </ul>
);

const Navbar = ({ links, location }) => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <Transition
        show={show}
        unmount={false}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className=' lg:w-52 bg-white/50 lg:bg-transparent p-1.5 lg:p-0 flex lg:!flex items-end fixed z-20 inset-0 lg:inset-auto'>
        <div className='bg-white border lg:border-0 rounded-lg w-full p-4 lg:p-0 shadow-md lg:shadow-none'>
          <NavbarList links={links} location={location} onClick={() => setShow(false)} />
        </div>
      </Transition>
      <i
        onClick={() => setShow(!show)}
        className=' lg:hidden text-white bg-gray-900 p-3 rounded-full fixed bottom-4 right-4 z-20'>
        {show ? <XIcon className='w-7' /> : <MenuIcon className='w-7' />}
      </i>
    </nav>
  );
};

export default Navbar;
