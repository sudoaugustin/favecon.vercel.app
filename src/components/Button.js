const Button = ({ label, icon, classes, ...rest }) => (
  <button
    {...rest}
    className={`flex justify-center items-center w-full p-2.5 space-x-1 rounded-md focus:outline-none transition duration-200 ${classes.root}`}>
    {icon && <i className={`w-6 ${classes.icon}`}> {icon}</i>}
    {label && <span className={`text-white font-medium ${classes.label}`}>{label}</span>}
  </button>
);

export default Button;
