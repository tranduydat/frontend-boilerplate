import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return { firstCounter: initialState.firstCounter };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispath] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispath({ type: "increment" })}>Increment</button>
      <button onClick={() => dispath({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispath({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
