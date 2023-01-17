import React, { useState } from 'react';
import './Color.scss';

const Color = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor('red');
  };

  return (
    <div className="color-container">
      <div className={color === 'black' ? 'black' : 'red'}>
        색상이 바뀔거예요
      </div>
      <button onClick={handleClick}>Click!</button>
    </div>
  );
};

export default Color;
