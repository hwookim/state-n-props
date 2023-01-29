import React, { useState } from 'react';
import './Color.scss';

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
        <button
          className={'colorBtn white'}
          onClick={() => handleClick('white')}
        />
        <button className={'colorBtn red'} onClick={() => handleClick('red')} />
        <button
          className={'colorBtn yellow'}
          onClick={() => handleClick('yellow')}
        />
      </div>
    </div>
  );
};

export default Color;
