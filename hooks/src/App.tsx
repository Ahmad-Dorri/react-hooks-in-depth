import { useContext } from 'react';

import { ThemeContext } from './context/theme-context-provider';

import StateComponentForm from './components/state-component-form';
import UseEffectComponent from './components/use-effect-component';
import UseReducerComponent from './components/use-reducer-component';
import UseRefComponent from './components/use-ref-component';
import NumberComponent from './components/number';
import { CountContext } from './context/count-context-provider';
import { CountActionTypes } from './types/count-reducer-types';

function App() {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(CountContext);
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
      <h1>Use Context: </h1>
      <NumberComponent />
      <button
        onClick={() =>
          dispatch({
            type: CountActionTypes.INCREAMENT,
            payload: 5,
          })
        }>
        increase the value
      </button>
    </div>
  );
}

export default App;
