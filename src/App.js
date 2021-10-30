import "./App.css";
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
import Table from "./components/Table";

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

      <Table/>
    </div>
  );
}

export default App;
