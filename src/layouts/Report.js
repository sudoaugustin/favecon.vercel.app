import Text from '@components/Text';
import Button from '@components/Button';
import KhabyIcon from '@icons/Khaby';
import GithubIcon from '@icons/Github';

const Report = () => (
  <div className='space-y-8 pt-8'>
    <Text variant='h1'>Report for imporvements!</Text>
    <div className='space-y-4'>
      <Text variant='p'>
        Do you have any error in code or not get the favicons of a website as expected?
      </Text>
      <div className='flex flex-col items-center py-5'>
        <KhabyIcon />
        <a href='https://github.com/sudoaugustin/favecon/issues/new' className='inline-block mt-1'>
          <Button
            icon={<GithubIcon />}
            label='Report on Github'
            classes={{
              root: 'bg-sky-600 hover:bg-sky-800 focus:ring ring-sky-200 w-42',
              icon: 'text-gray-50',
            }}
          />
        </a>
      </div>
    </div>
  </div>
);

export default Report;
