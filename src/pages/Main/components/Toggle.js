import React from 'react';

const Toggle = props => {
  return (
    <div className="toggleContainer">
      <div className="toggleText">
        <div className="toggleButton">▼</div>
        숨기고 싶은 내용이 있어요 👀
      </div>
      <div className="toggleContents">contents</div>
    </div>
  );
};

export default Toggle;
