import React from 'react';
import './Counter.scss';

const Counter = () => {
  return (
    <div className="counter">
      <button>-</button>
      <div className="counterText">0</div>
      <button>+</button>
    </div>
  );
};

export default Counter;
