import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <Greet name="Dat" aka="dt" /> */}
      {/* <Greet name="Long" aka="Dog">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Diana" aka="Lady" />
      <Welcome name="Dog"/> */}
    </div>
  );
}

export default App;
