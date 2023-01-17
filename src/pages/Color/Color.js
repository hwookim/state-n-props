import React from 'react';
import './Color.scss';

const Color = () => {
  const handleClickGreen = () => {};

  const handleClickPurple = () => {};

  return (
    <div className="colorContainer">
      <div className="colorBox">
        <span className="colorName">색상</span>
      </div>
      <div className="info">
        <button onClick={handleClickGreen}>GREEN</button>
        <button onClick={handleClickPurple}>PURPLE</button>
      </div>
    </div>
  );
};

export default Color;
