import result from '@results/getBestIcons';
import Method from './Method';

const GetIcons = () => (
  <Method
    result={result}
    method='getBestIcons'
    description={
      <>
        This method fetch all available favicons from given url. Then group the fetched icons by{' '}
        <code>rel</code> & select the best icon on each group.
      </>
    }
  />
);
export default GetIcons;
