import React, { useState } from 'react';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './Main.scss';

const Main = () => {
  const [count, setCount] = useState(0);
  const isUnder5 = count < 5;

  const handleCount = value => {
    setCount(value);
  };

  return (
    <div className="mainContainer">
      <Counter value={count} onChange={handleCount} />
      <Toggle contents={isUnder5 ? '😢' : '😊'} />
    </div>
  );
};

export default Main;
