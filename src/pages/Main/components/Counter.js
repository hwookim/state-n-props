import React from 'react';

const Counter = props => {
  const { value, onChange } = props;

  const handleCounter = change => () => {
    onChange(change);
  };

  return (
    <div className="counterContainer">
      <button onClick={handleCounter(-1)}>-</button>
      <div className="counterText">{value}</div>
      <button onClick={handleCounter(+1)}>+</button>
    </div>
  );
};

export default Counter;
