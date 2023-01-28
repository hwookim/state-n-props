import React from 'react';
import './ColorButton.scss';

const ColorButton = props => {
  const { color, onClick } = props;

  const handleClick = () => {
    onClick(color);
  };

  return <button className={'colorBtn ' + color} onClick={handleClick} />;
};

export default ColorButton;
