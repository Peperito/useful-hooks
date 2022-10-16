import ToggleComponent from './useToggle/ToggleComponent'
import TimeoutComponent from './useTimeout/TimeoutComponent'
import DebounceComponent from './useDebounce/DebounceComponent';
import UseUpdateEffectComponent from './useUpdateEffect/UseUpdateEffectComponent';
import UseArrayComponent from "./useArray/UseArrayComponent";
import PreviousComponent from "./usePrevious/PreviousComponent"
import StateWithHistoryComponent from './stateWithHistory/StateWithHistoryComponent';


function App() {
  return (
    <>
      <ToggleComponent />
      <TimeoutComponent />
      <DebounceComponent />
      <UseUpdateEffectComponent />
      <UseArrayComponent />
      <PreviousComponent />
      <StateWithHistoryComponent />
    </>
  );
}

export default App
