import Head from 'next/head';
import Code from '@components/Code';
import NodeIcon from '@icons/Node';
import ElectronIcon from '@icons/Electron';
import BrowsersIcon from '@icons/Browsers';
import ReactNativeIcon from '@icons/ReactNative';

const Installation = () => {
  const matrix = [
    [<NodeIcon />, <ElectronIcon />],
    [<ReactNativeIcon />, <BrowsersIcon />],
  ];
  return (
    <>
      <h1>Installation</h1>
      <Code
        showCopy={false}
        lang='none'
        code={`<span class="text-gray-400">#npm</span>\nnpm install <span class="text-sky-400">favecon</span>\n\n<span class="text-gray-400">#yarn</span>\nyarn add <span class="text-sky-400">favecon</span>`}
      />
      <h2>Environments</h2>
      <div className='flex flex-col mb-10 border border-dashed divide-y divide-dashed rounded-lg overflow-hidden'>
        {matrix.map((items, i) => (
          <div
            key={i}
            className='flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-dashed'>
            {items.map((item, i) => (
              <p
                key={i}
                className='inline-flex items-center justify-center w-full h-24 md:h-36 !my-0 hover:shadow-md duration-300'>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
      <p>
        Note: Favecon doesn't work on website's client-side code because of{' '}
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors'>CORS</a>. But works
        on browser's extension(add-on) code.
      </p>
      <div>
        <h2>ES5 support</h2>
        <p>
          Favecon builds are not transpiled to ES5. If you need to support browsers that do not
          provide ES6 features natively, you can do so by compiling your code with{' '}
          <a href='https://babeljs.io/'>Babel</a> and using preset{' '}
          <a href='https://babeljs.io/docs/en/babel-preset-env'>@babel/preset-env</a>.
        </p>
      </div>
    </>
  );
};

export default Installation;
