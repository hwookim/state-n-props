import React, { useState } from 'react';
import './Count.scss';

const Count = props => {
  const { onChange, onReset } = props;

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = value => () => {
    const result = quantity + value;
    if (result < 1) return;
    setQuantity(result);
    onChange(result);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleQuantity(-1)}>-</button>
        <div className="countInputText">{quantity}</div>
        <button onClick={handleQuantity(+1)}>+</button>
      </div>
      <button className="resetBtn" onClick={onReset}>
        reset
      </button>
    </div>
  );
};

export default Count;
