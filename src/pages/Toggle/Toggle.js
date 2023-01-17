import React from 'react';
import './Toggle.scss';

const Toggle = () => {
  return (
    <div className="toggleContainer">
      <div className="toggleText">
        <div className="toggleButton">▼</div>
        숨기고 싶은 내용이 있어요 👀
      </div>
      <div className="toggleContents">42기 화이팅!!!!</div>
    </div>
  );
};

export default Toggle;
