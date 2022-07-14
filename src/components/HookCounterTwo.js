import React, { useState } from "react";

function HookCounterTwo() {
  const initCount = 0;
  const [count, setCount] = useState(initCount); // Hook

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default HookCounterTwo;
