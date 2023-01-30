import React, { useState } from 'react';
import './Color.scss';

import ColorButton from './ColorButton';

const Color = props => {
  const { onClick } = props;
  const [color, setColor] = useState('white');

  const handleClick = value => {
    setColor(value);
    onClick(value);
  };

  return (
    <div className="color">
      <span className="colorText">
        색상 :
        <div className={'selected ' + color} />
        {color}
      </span>
      <div className="colorHandler">
        <ColorButton color="white" onClick={handleClick} />
        <ColorButton color="red" onClick={handleClick} />
        <ColorButton color="yellow" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Color;
