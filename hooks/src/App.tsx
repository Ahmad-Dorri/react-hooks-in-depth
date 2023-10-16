import { useContext } from 'react';

import { ThemeContext } from './context/theme-context-provider';

import StateComponentForm from './components/state-component-form';
import UseEffectComponent from './components/use-effect-component';
import UseReducerComponent from './components/use-reducer-component';
import UseRefComponent from './components/use-ref-component';

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const className = 'body-' + theme;
  return (
    <div className={className}>
      <h1>Use State: </h1>
      <StateComponentForm />
      <h1>Use Effect: </h1>
      <UseEffectComponent />
      <h1>Use Ref: </h1>
      <UseRefComponent />
      <h1>Use Reducer: </h1>
      <UseReducerComponent />
    </div>
  );
}

export default App;
