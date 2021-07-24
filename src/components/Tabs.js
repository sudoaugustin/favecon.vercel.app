import { useEffect, useRef, useState } from 'react';

const Tabs = ({ items, classes = {}, renderContent, handleChange }) => {
  const refs = items.map(() => useRef(null));
  const [style, setStyle] = useState({});
  const [active, setActive] = useState(0);
  useEffect(() => {
    const ele = refs[active].current;
    setStyle({ left: ele.offsetLeft, width: ele.offsetWidth });
  }, [active]);

  return (
    <div className={classes.root}>
      <div className={`relative w-full flex overflow-hidden ${classes.tabs}`}>
        {items.map(({ label }, i) => (
          <span
            key={i}
            ref={refs[i]}
            children={label}
            className={`cursor-pointer transition duration-500 text-center 
            ${typeof classes.tab === 'string' ? classes.tab : classes.tab(active === i)}`}
            onClick={() => {
              setActive(i);
              handleChange && handleChange(i);
            }}
          />
        ))}
        <i style={style} className={`duration-500 absolute bottom-0 ${classes.indicator}`} />
      </div>
      {renderContent({ ...items[active], index: active })}
    </div>
  );
};

export default Tabs;
