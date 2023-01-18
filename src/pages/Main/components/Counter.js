import React from 'react';

const Counter = props => {
  const { value, onChange } = props;

  const handleCounter = change => () => {
    const result = value + change;
    if (result < 0) return;
    onChange(result);
  };

  return (
    <div className="counter">
      <button onClick={handleCounter(-1)}>-</button>
      <div className="counterText">{value}</div>
      <button onClick={handleCounter(+1)}>+</button>
    </div>
  );
};

export default Counter;
