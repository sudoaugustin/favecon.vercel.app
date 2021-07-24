const Component = () => {
  const axis = [
    {
      /* X */
      classes: {
        grid: 'grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 grid-rows-1 gap-x-[8.1875rem] px-2.5 h-full',
        line: isLast => `border-l w-[1px] h-full ${isLast && 'hidden sm:block lg:hidden'}`,
      },
      lines: [1, 2, 3, 4, 5],
    },
    {
      /* Y */
      classes: {
        grid: 'grid-rows-4 sm:grid-rows-3 lg:grid-rows-4 grid-cols-1 gap-y-[8.1875rem] py-2.5 w-full',
        line: isLast => `border-t w-full h-[1px] ${isLast && 'block sm:hidden lg:block'}`,
      },
      lines: [1, 2, 3, 4],
    },
  ];
  return (
    <div className='absolute inset-0 hidden xs:block'>
      {axis.map(({ lines, classes }, i) => (
        <div className={`inline-grid absolute ${classes.grid}`} key={i}>
          {lines.map((line, i) => (
            <i
              className={`border-dashed border-gray-300 ${classes.line(line === lines.length)}`}
              key={i}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Component;

// {axis.map(({ cols, rotate }) => (
//   <div className={`hidden xs:flex justify-center absolute inset-0 ${rotate}`}>
//     <div className={`inline-grid grid-rows-1 ${cols} gap-x-[8.1875rem]`}>
//       {lines.map((_, index, arr) => (
//         <i
//           className={`border-l border-dashed border-gray-300 w-[1px] h-full
//            ${index === arr.length - 1 && 'block sm:hidden lg:block'}`}
//           key={index}
//         />
//       ))}
//     </div>
//   </div>
// ))}

// const GridLines = ({ rotate, cols }) => (
//   <div className={`flex justify-center absolute inset-0 ${rotate}`}>
//     <div className={`inline-grid ${cols} gap-x-[8.1875rem]`}>
//       {[1, 2, 3, 4, 5].map((_, i) => (
//         <i className='border-l border-dashed border-gray-300 w-[1px] h-full' key={i} />
//       ))}
//     </div>
//   </div>
// );

/*

* ClassName to Purge

*/
