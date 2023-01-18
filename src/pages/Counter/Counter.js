import React, { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = value => () => {
    const result = count + value;
    if (result < 0) return;
    setCount(result);
  };

  return (
    <div className="counter">
      <button onClick={handleCounter(-1)}>-</button>
      <div className="counterText">{count}</div>
      <button onClick={handleCounter(+1)}>+</button>
    </div>
  );
};

export default Counter;
