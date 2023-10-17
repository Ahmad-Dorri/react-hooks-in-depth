import { createContext, useCallback, useMemo, useReducer } from 'react';

import {
  CountActionTypes,
  CountAction,
  CountState,
} from '../types/count-reducer-types';

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
  const reducer = useCallback((state: CountState, action: CountAction) => {
    const { type, payload } = action;
    switch (type) {
      case CountActionTypes.INCREAMENT:
        return {
          ...state,
          count: state.count + payload,
        };
      case CountActionTypes.DECREMENT:
        return {
          ...state,
          count: state.count - payload,
        };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContextProvider, CountContext };
