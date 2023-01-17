import React from 'react';

const Counter = props => {
  return (
    <div className="counterContainer">
      <button>-</button>
      <div className="counterText">0</div>
      <button>+</button>
    </div>
  );
};

export default Counter;
