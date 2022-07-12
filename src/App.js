import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import Table from "./components/Table";
import { PureComp } from "./components/PureComp";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <Table /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className={styles.success}>Hello</h1>
      <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
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
