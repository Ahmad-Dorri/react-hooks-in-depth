import { useContext, useState } from 'react';

import { CountActionTypes } from './types/count-reducer-types';

import StateComponentForm from './components/state-component-form';
import UseEffectComponent from './components/use-effect-component';
import UseReducerComponent from './components/use-reducer-component';
import NumberComponent from './components/number';
import ColorContextBox from './components/color-context-box';

import { ThemeContext } from './context/theme-context-provider';
import { CountContext } from './context/count-context-provider';
import {
  ColorActionTypes,
  ColorContext,
} from './context/color-context-provider';
import UseRefComponent from './components/use-ref-component';
import UseTransitionComponent from './components/use-transition-component';

function App() {
  const [inputValue, setInputValue] = useState('');

  const { theme } = useContext(ThemeContext);
  const { dispatch: countDispatch } = useContext(CountContext);
  const { dispatch: colorDispatch } = useContext(ColorContext);

  const className = 'body-' + theme;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    colorDispatch({
      type: ColorActionTypes.CHANGECOLOR,
      payload: inputValue,
    });
  };

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
          countDispatch({
            type: CountActionTypes.INCREAMENT,
            payload: 5,
          })
        }>
        increase the value
      </button>
      <ColorContextBox />
      <form onSubmit={onSubmit}>
        <input
          placeholder="write a color"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="border"
        />
        <button className="border p-2" type="submit">
          Submit
        </button>
      </form>
      <h1>Use Transition</h1>
      <UseTransitionComponent />
    </div>
  );
}

export default App;
