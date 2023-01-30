import React from 'react';
import './ColorButton.scss';

const ColorButton = props => {
  const { color, onClick } = props;

  const handleClick = () => {
    onClick && onClick(color);
  };

  return <button className={'colorButton ' + color} onClick={handleClick} />;
};

export default ColorButton;
