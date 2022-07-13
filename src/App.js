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
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterProp from "./components/CounterProp";

function App() {
  return (
    <div className="App">
      <CounterProp
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterProp
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Dat" : "Guest")} /> */}
      {/* <HoverCounter name="Dat" /> */}
      {/* <ClickCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
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
