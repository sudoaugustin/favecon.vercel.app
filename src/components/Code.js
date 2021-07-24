import Prism from 'prismjs';
import { useState, useEffect } from 'react';
import CheckIcon from '@heroicons/react/outline/CheckIcon';
import ClipboardIcon from '@heroicons/react/outline/ClipboardIcon';
import useClipboard from '@hooks/useClipboard';

const highlightCode = ({ code, lang }) => Prism.highlight(code, Prism.languages[lang]);

const Code = ({ code, result, lang = 'javascript', showCopy = true }) => {
  const [clipboard, setClipboard] = useClipboard();
  const [html, setHTML] = useState('');
  useEffect(() => {
    setHTML(lang !== 'none' ? highlightCode({ code, lang }) : code);
  }, [code]);
  return (
    <div className='relative sm:rounded-xl bg-sky-700 overflow-hidden -mx-4 sm:mx-0 mb-10 '>
      <div className='overflow-x-auto font-medium leading-snug bg-black/75 flex items-center'>
        <pre>
          <code className={`!text-white  ${lang}`} dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
        {showCopy && (
          <i
            onClick={() => setClipboard(code)}
            className={`p-1 m-2 rounded transition duration-300 absolute top-0 right-0
                      ${clipboard.value ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            {clipboard.value ? (
              <CheckIcon className='w-5 h-5 text-green-300' />
            ) : (
              <ClipboardIcon className='w-5 h-5 text-gray-300 hover:text-white' />
            )}
          </i>
        )}
      </div>
      {result && (
        <div className='font-semibold bg-gray-50 border-t border-gray-500 select-none overflow-x-auto'>
          <pre className='!my-0' dangerouslySetInnerHTML={{ __html: result }}></pre>
        </div>
      )}
    </div>
  );
};

export default Code;
