import { useState } from 'react';
import Tabs from '@components/Tabs';
import GridLines from '@components/GridLines';
import GridIcons from '@components/GridIcons';
import WindowFrame from '@components/WindowFrame';

const icons = [
  { rel: 'icon', size: '24', color: 'amber' },
  { rel: 'icon', size: '32', color: 'amber' },
  { rel: 'icon', size: '64', color: 'amber' },
  { rel: 'apple-touch...', size: '128', color: 'fuchsia' },
  { rel: 'apple-touch...', size: '256', color: 'fuchsia' },
  { rel: 'apple-touch...', size: '512', color: 'fuchsia' },
  { rel: 'shortcut icon', size: '48', color: 'emerald' },
  { rel: 'shortcut icon', size: '256', color: 'emerald' },
];
const renderCode = method => {
  const parameter = `icon${method === 'getBestIcon' ? '' : 's'}`;
  return `<span class="keyword">import</span> favecon <span class="punctuation">from</span> <span class="string">'favecon'</span><span class="punctuation">;</span>\n\n<span class="">favecon</span>\n  <span class="operator">.</span><span class="function">${method}</span><span class="punctuation">(</span><span class="string">'http://example.com'</span><span class="punctuation">)</span>\n  <span class="punctuation">.</span><span class="function">then</span><span class="punctuation">(</span><span class="parameter">${parameter}</span> <span class="operator">=&gt;</span> console<span class="punctuation">.</span><span class="function">log</span><span class="punctuation">(</span>${parameter}<span class="punctuation">)</span><span class="punctuation">)</span></code>`;
};

const Sample = () => {
  const [method, setMethod] = useState(0);
  const indexs = [undefined, [2, 5, 7], [5]][method];

  return (
    <div className='flex items-center relative'>
      {/* <-- Background Start --> */}
      <div className='rounded-3xl absolute w-full h-full lg:h-80 -ml-10 md:ml-0 bg-gray-100' />
      <div className='-rotate-2 rounded-r-3xl md:rounded-3xl absolute w-full h-full lg:h-80 -ml-10 md:ml-0 bg-gradient-to-tr from-sky-400 to-cyan-500' />
      {/* <-- Background End --> */}
      <div className='flex flex-col lg:flex-row lg:justify-center md:items-center w-full py-8 lg:px-2 lg:space-x-6 z-10'>
        <div className='bg-sky-500 overflow-hidden -mx-4 md:mx-0 md:w-[34.375rem] lg:w-[32rem] xl:w-[34rem] md:rounded-t-xl lg:rounded-xl'>
          <div className='flex flex-col bg-black/80'>
            <WindowFrame />
            <Tabs
              items={[{ label: 'getIcons' }, { label: 'getBestIcons' }, { label: 'getBestIcon' }]}
              classes={{
                tabs: 'bg-sky-900/50',
                tab: active => `py-2 px-4 z-10 font-medium
                ${active ? 'text-sky-100' : 'text-sky-300 hover:text-sky-100'}`,
                indicator: 'bg-sky-300/20  h-full',
              }}
              handleChange={i => setMethod(i)}
              renderContent={({ label: method }) => (
                <pre className='p-5 overflow-x-auto scrollbar-hidden'>
                  <code
                    className='javascript'
                    dangerouslySetInnerHTML={{ __html: renderCode(method) }}
                  />
                </pre>
              )}
            />
          </div>
        </div>
        <div className='z-10 -ml-4 md:-ml-0'>
          <div className='inline-block bg-white rounded-br-xl md:rounded-b-xl lg:rounded-xl border border-gray-50 shadow-xl relative'>
            <GridLines />
            <GridIcons icons={icons} indexs={indexs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
