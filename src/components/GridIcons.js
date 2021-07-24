import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

const GridIcons = ({ icons, indexs }) => (
  <div className='inline-grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-5 p-5 h-80 xs:h-[26.125rem] sm:h-[17.875rem] lg:h-[26.125rem] scrollbar-hidden overflow-y-auto'>
    {icons.map(({ rel, size, color }, i) => {
      const show = indexs ? indexs.includes(i) : true;
      return (
        <Transition
          key={i}
          show={show}
          as={Fragment}
          unmount={false}
          enter='transition duration-[400ms]'
          enterFrom='opacity-0 scale-50'
          enterTo='opacity-100 scale-100'
          leave='duration-200 transition ease-in-out'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <div
            className={`text-${color}-900 border-2 border-${color}-200 bg-${color}-100 rounded-2xl w-28 h-28 
              ${!show && 'xs:!opacity-0'} flex xs:!flex items-center justify-center relative`}>
            <span children={size + 'x' + size} className={`text-lg text-${color}-700`} />
            <span
              children={rel}
              className={`text-${color}-900 bg-${color}-200 rounded px-1 font-medium right-2 bottom-2 absolute text-xs`}
            />
          </div>
        </Transition>
      );
    })}
  </div>
);

export default GridIcons;

/*
 <-- Classnames to PURGE -->
bg-amber-200 bg-fuchsia-200 bg-emerald-200 
bg-amber-100 bg-fuchsia-100 bg-emerald-100 
text-amber-700 text-fuchsia-700 text-emerald-700
text-amber-900 text-fuchsia-900 text-emerald-900
border-amber-200 border-fuchsia-200 border-emerald-200 
*/
