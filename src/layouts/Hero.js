import CopyIcon from '@heroicons/react/outline/DuplicateIcon';
import CheckIcon from '@heroicons/react/outline/CheckCircleIcon';
import useClipboard from '@hooks/useClipboard';
import Text from '@components/Text';

const Hero = () => {
  const [clipboard, setClipboard] = useClipboard();
  const code = 'npm install favecon';
  return (
    <div className='space-y-8 md:space-y-10'>
      <Text variant='h1'>Get best quality favicons of any website</Text>
      <Text variant='p' className='max-w-screen-lg'>
        Most APIs give old or low quality favicons. Fetch live and high quality favicons of websites
        using favecon from <span className='text-gray-900'>own server</span> or{' '}
        <span className='text-gray-900'>client devices</span>.
      </Text>
      <code
        onClick={() => setClipboard(code)}
        className='p-4 text-base text-gray-800 bg-gray-50 border group flex items-center justify-between cursor-pointer rounded-xl sm:w-80'>
        <p className='space-x-2 sm:space-x-4'>
          <span className='text-gray-400'>$</span> {code}
        </p>
        <i
          className={`w-5 h-5 
          ${clipboard.value ? 'text-emerald-400' : 'text-gray-400 group-hover:text-gray-800'}`}>
          {clipboard.value ? <CheckIcon /> : <CopyIcon />}
        </i>
      </code>
    </div>
  );
};

export default Hero;
