import React, { useState } from 'react';

const Toggle = props => {
  const { children } = props;
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
      {isOpen && <div className="toggleContents">{children}</div>}
    </div>
  );
};

export default Toggle;
