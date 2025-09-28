import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: "24px" }}>You Clicked:   {count} Times</p>

      <button onClick={increment} style={{ margin: "5px" }}>Increment</button>
      <button onClick={decrement} style={{ margin: "5px" }}>Decrement</button>
      <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
    </div>
  )
}

export default Counter
