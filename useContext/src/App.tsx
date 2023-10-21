import { CountAction } from './context/counter-context-provider';
import { Button } from './Button';
import useCounter from './hooks/use-counter';

export interface ButtonProps {
  dispatch: React.Dispatch<CountAction>;
}

function App() {
  const { state } = useCounter();

  return (
    <>
      {state.count}
      <Button />
    </>
  );
}

export default App;
