import result from '@results/getIcons';
import Method from './Method';

const GetIcons = () => (
  <Method
    result={result}
    method='getIcons'
    description='This method fetch all available favicons from given url.'
  />
);
export default GetIcons;
