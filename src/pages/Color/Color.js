import React, { useState } from 'react';
import './Color.scss';

const Color = () => {
  const [color, setColor] = useState('black');

  const handleClickGreen = () => {
    setColor('green');
  };

  const handleClickPurple = () => {
    setColor('purple');
  };

  return (
    <div className="colorContainer">
      <div className={'colorBox ' + color}>
        <span className="colorName">{color}</span>
      </div>
      <div className="info">
        <button onClick={handleClickGreen}>GREEN</button>
        <button onClick={handleClickPurple}>PURPLE</button>
      </div>
    </div>
  );
};

export default Color;
