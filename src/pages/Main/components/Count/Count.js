import React, { useState } from 'react';
import './Count.scss';

const Count = props => {
  const { defaultValue, onChange, onReset } = props;

  const [count, setCount] = useState(defaultValue);

  const handleCount = value => () => {
    const result = count + value;
    if (result < 1) return;
    setCount(result);
    onChange(result);
  };

  const resetCount = () => {
    setCount(defaultValue);
    onReset();
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleCount(-1)}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={handleCount(+1)}>+</button>
      </div>
      <button className="resetBtn" onClick={resetCount}>
        reset
      </button>
    </div>
  );
};

export default Count;
