import React, { useState } from 'react';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './Main.scss';

const Main = () => {
  const [count, setCount] = useState(0);
  const isOver5 = count > 5;

  return (
    <>
      <Toggle>
        <Counter value={count} onChange={setCount} />
        <div className="result">{isOver5 ? '😊' : '😢'}</div>
      </Toggle>
    </>
  );
};

export default Main;
