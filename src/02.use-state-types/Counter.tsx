import { useState } from "react";

const Counter = () => {
  //we use generics to define the type for useState
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Challenge-1 Basic </h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
