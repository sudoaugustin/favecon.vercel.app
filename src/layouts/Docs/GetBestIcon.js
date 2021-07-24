import result from '@results/getBestIcon';
import Method from './Method';

const GetIcons = () => (
  <Method
    result={result}
    method='getBestIcon'
    isArray={false}
    description={
      <>
        This method gives you the best icon (based on <code>size</code>).
      </>
    }
  />
);
export default GetIcons;
