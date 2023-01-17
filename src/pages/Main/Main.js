import React, { useState } from 'react';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './Main.scss';

const Main = () => {
  const [count, setCount] = useState(0);
  const isOver5 = count > 5;

  const handleCounter = value => {
    const result = count + value;
    if (result < 0) return;
    setCount(result);
  };

  return (
    <>
      <Toggle>
        <Counter value={count} onChange={handleCounter} />
        <div className="result">{isOver5 ? '😊' : '😢'}</div>
      </Toggle>
    </>
  );
};

export default Main;
