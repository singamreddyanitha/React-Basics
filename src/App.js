
import './App.css';
// import PassingLists from './Components/PassingLists';
// import SuperLeague from './SuperOverLeague';
// import SocialButtons from "./SocialButtons";
// import ClassComponent from './Components/classComponents';
// import CounterUsingHook from "./Components/classComponents/CounterUsingHook"
import UsingIfElse from "./Components/ConditionalRendering/usingIfElse"
// import IfElseWithHook from "./Components/ConditionalRendering/IfElseWithHook";
//  import ElementVariableUsingReact from "./Components/ConditionalRendering/ElementVariableUsingReact";
// import UsingTernaryOperatorInReact from "./Components/ConditionalRendering/UsingTernaryOperatorInReact";
import UsingLogicalOperatorInReact from "./Components/ConditionalRendering/UsingLogicalOperatorInReact";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello WOrld!</h1> */}
       {/* <Sample name = "Anitha" age = "28"/> */}
        {/* <Counter counterValue = "10" /> */}
        {/* <PassingLists />
       <SuperLeague/>
       <SocialButtons like = "Like" comment = "Comment" share = "Share" /> */}
       {/* <ClassComponent /> */}
       {/* <CounterUsingHook/> */}
       <UsingIfElse />
       {/* <IfElseWithHook/> */}
       {/* <ElementVariableUsingReact /> */}
       {/* <UsingTernaryOperatorInReact /> */}
       <UsingLogicalOperatorInReact />
    </div>
  );
}

export default App;
