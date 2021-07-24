import React from 'react';
const Text = ({ variant, children, className }) =>
  React.createElement(variant, { className: `${getClasses(variant)} ${className}` }, children);

export default Text;

const getClasses = variant => {
  switch (variant) {
    case 'h1':
      return 'text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900';
    case 'h2':
      return 'text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight text-gray-900';
    case 'p':
      return 'text-lg sm:text-2xl sm:leading-10 font-medium text-gray-500';
    default:
      break;
  }
};
