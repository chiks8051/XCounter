import React, { useState } from "react";

const Xcounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementValue = () => {
    setCounter(counter + 1);
  };
  const decrementValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement </button>
    </>
  );
};

export default Xcounter;
