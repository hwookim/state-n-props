import React, { useState } from 'react';
import './Toggle.scss';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="toggleContainer">
      <div className="toggleText">
        <div className="toggleButton" onClick={toggle}>
          {isOpen ? '▼' : '▶'}
        </div>
        숨기고 싶은 내용이 있어요 👀
      </div>
      {isOpen && <div className="toggleContents">42기 화이팅!!!!</div>}
    </div>
  );
};

export default Toggle;
