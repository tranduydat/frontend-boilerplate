import React from "react";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterTwo />
      {/* <UserContext.Provider value={"Dat"}>
        <ChannelContext.Provider value={"Today"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
