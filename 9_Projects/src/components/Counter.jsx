import React, { useState } from 'react';
import "../css/Style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment  = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="container">
      <h1 className="number">{count}</h1>

      <div className="btns-container">
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
