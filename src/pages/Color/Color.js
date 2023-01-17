import React, { useState } from 'react';
import './Color.scss';

const Color = () => {
  const [color, setColor] = useState('black');

  const handleClickRed = () => {
    setColor('red');
  };

  const handleClickOrange = () => {
    setColor('orange');
  };

  const handleClickYellow = () => {
    setColor('yellow');
  };

  const handleClickGreen = () => {
    setColor('green');
  };

  const handleClickBlue = () => {
    setColor('blue');
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
        <button onClick={handleClickRed}>RED</button>
        <button onClick={handleClickOrange}>ORANGE</button>
        <button onClick={handleClickYellow}>YELLOW</button>
        <button onClick={handleClickGreen}>GREEN</button>
        <button onClick={handleClickBlue}>BLUE</button>
        <button onClick={handleClickPurple}>PURPLE</button>
      </div>
    </div>
  );
};

export default Color;
