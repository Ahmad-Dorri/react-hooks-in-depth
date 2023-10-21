import { createContext, useMemo, useReducer } from 'react';

const ACTIONS = {
  INCREAMENT: 'INCREAMENT',
  DECREMENT: 'DECREMENT',
};

export type CountAction = {
  type: string;
  payload: number;
};

export type CountState = {
  count: number;
};

const initialCount: CountState = {
  count: 0,
};

const countReudcer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

const CountContext = createContext<{
  state: CountState;
  dispatch: React.Dispatch<CountAction>;
  ACTIONS: typeof ACTIONS;
}>({
  state: initialCount,
  dispatch: () => null,
  ACTIONS: ACTIONS,
});

const CountContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(countReudcer, initialCount);
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
      ACTIONS,
    };
  }, [state, dispatch]);
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountContextProvider };
