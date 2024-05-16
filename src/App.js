import logo from './logo.svg';
import './App.css';
import UseSTateHooks from './Hooks/UseSTateHooks'
import UseEffectHooks from './Hooks/UseEffectHooks';
import UseCallbackFUnction from './Hooks/UseCallbackFUnction';
import UseImprativeHook from './Hooks/UseImprativeHook';
function App() {
  return (
    <div className="App">
     {/* <UseSTateHooks/> */}
     {/* <UseEffectHooks/> */}
     {/* <UseLayoutEffectHooks/> */}
     <UseImprativeHook/>
     {/* <UseContextHook/> */}
    </div>
  );
}

export default App;
