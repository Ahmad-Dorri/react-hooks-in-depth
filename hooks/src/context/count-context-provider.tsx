import { createContext, useReducer } from 'react';

import { CountAction, CountState } from '../types/count-reducer-types';
import { countReducer } from '../lib/count-reducer';

const initialState: CountState = {
  count: 0,
};

const CountContext = createContext<{
  state: CountState;
  dispatch: React.Dispatch<CountAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const CountContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContextProvider, CountContext };
