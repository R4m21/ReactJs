import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import Counter1 from "./components/Counter1";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// import User from "./components/User";
// import HoverCounter from "./components/HoverCounter";
// import ClickCounter from "./components/ClickCounter";
// import ErrorBoundary from "./components/ErrorBoundary";
// import Hero from "./components/Hero";
// import PortalDemo from "./components/PortalDemo";
// import FRParentInput from "./components/FRParentInput";
// import FocusInput from "./components/FocusInput";
// import RefsDemo from "./components/RefsDemo";
// import ParentComp from "./components/ParentComp";
// import PureComp from "./components/PureComp";
// import Form from "./components/Form";
// import NameList from './components/NameList'
// import UserGreeting from "./components/UserGreeting";
// import ParentComponent from "./components/ParentComponent";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import FunctionClick from "./components/FunctionClick";
// import Counter from "./components/Counter";
// // import {Greet} from './components/Greet';
// import Greet from "./components/Greet";
// import Hello from './components/Hello';
// import Welcome from "./components/Welcome";
// import Message from './components/Message';
// import StyleSheet from "./components/Stylesheet"
// import Inline from './components/Inline'
// import "./appStyles.css"
// import styles from './appStyles.module.css'

// import LifecyleA from './components/LifecycleA'
// import LifecycleC from './components/LifecycleC'
// import FragmentDemo from './components/FragmentDemo'
// import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      {/* functional components */}
      {/* <Greet/> */}
      {/* parent to child pass props */}
      {/* <Greet name="mani" idNum="1" /> */}
      {/* <Greet name="ram" idNum="2" /> */}

      {/* child to parent pass props (dynamic containt)*/}
      {/* <Greet name="maniram" idNum="3">
      <button>Action </button>
    </Greet>
    <Greet>
      <p>This is child props</p>
    </Greet> */}

      {/* class components */}
      {/* <Welcome/> */}
      {/* parent to child pass props */}
      {/* <Welcome name="mani" idNum="1" /> */}
      {/* <Welcome name="ram" idNum="2"/> */}

      {/* child to parent pass props (dynamic containt)*/}
      {/* <Welcome name="maniram" idNum="3">
      <button>Action </button>
    </Welcome>
    <Welcome>
      <p>This is child props</p>
    </Welcome> */}

      {/* <Hello/> */}

      {/* <Message/> */}

      {/* <Counter /> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <StyleSheet primary = {true}/> */}

      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Form></Form> */}

      {/* <LifecycleA/> */}

      {/* <LifecycleC/> */}

      {/* <FragmentDemo/> */}

      {/* <Table/> */}

      {/* <PureComp/> */}

      {/* <ParentComp/> */}

      {/* <RefsDemo/> */}

      {/* <FocusInput/> */}

      {/* <FRParentInput/> */}

      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/*
      <ClickCounter name='maniram'/>

      <HoverCounter/> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <User name="Maniram"/> */}
      {/* <User name={()=>"Chauhan"}/> */}
      {/* <User name={(isLoggedIn)=>isLoggedIn?"Maniram":"Guest"}/> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn?"Maniram":"Guest"}/> */}
      {/* <Counter1 render={(count,incrementCount)=><ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
      <Counter1 render={(count,incrementCount)=><HoverCounterTwo count={count} incrementCount={incrementCount}/>}/> */}
      {/* <Counter1>{(count,incrementCount)=><ClickCounterTwo count={count} incrementCount={incrementCount}/>}</Counter1> */}
      {/* <Counter1>{(count,incrementCount)=><HoverCounterTwo count={count} incrementCount={incrementCount}/>}</Counter1> */}
      {/* <UserProvider value="maniram"> */}
        <ComponentC/>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
