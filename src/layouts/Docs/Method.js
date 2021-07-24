import Code from '@components/Code';

const Types = () => (
  <div>
    <h2>Types</h2>
    <div>
      <p>
        <code>Icon</code> <span> - A object with the following properties</span>
      </p>
      <ul>
        <li>
          <span className='font-mono'>rel :</span> String
        </li>
        <li>
          <span className='font-mono'>size:</span> Int | Undefined
        </li>
        <li>
          <span className='font-mono'>href:</span> String
        </li>
      </ul>
    </div>
  </div>
);

const Syntax = ({ method, isArray }) => {
  const code = `${method}(url:String)
  .then((${isArray ? 'icons:[Icon]' : 'icon:Icon'}) => { ... });`;
  return (
    <div>
      <h2>Syntax</h2>
      <Code showCopy={false} code={code} />
    </div>
  );
};

const Example = ({ method, result, isArray }) => {
  const parameter = isArray ? 'icons' : 'icon';
  const code = `import favecon from 'favecon';\n// const favecon = require('favecon');\n\nfavecon
  .${method}('https://npmjs.com')
  .then(${parameter} => console.log(${parameter}));`;

  return (
    <div>
      <h2>Example</h2>
      <Code result={result} code={code} />
    </div>
  );
};

const Method = ({ method, description, result, isArray = true }) => (
  <>
    <h1>{method}</h1>
    <p>{description}</p>
    <Syntax method={method} isArray={isArray} />
    <Types />
    <Example method={method} isArray={isArray} result={result} />
  </>
);

export default Method;
