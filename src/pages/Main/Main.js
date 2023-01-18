import React, { useState } from 'react';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import './Main.scss';

const Main = () => {
  const [count, setCount] = useState(0);

  const handleCount = value => {};

  return (
    <div className="main">
      <Counter value={count} onChange={handleCount} />
      <Toggle contents="😢" />
    </div>
  );
};

export default Main;
