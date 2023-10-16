import { useReducer } from 'react';

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() =>
          dispatch({
            type: CountActionKind.INCREASE,
            payload: 5,
          })
        }>
        Increase the counter by 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: CountActionKind.DECREASE,
            payload: 3,
          })
        }>
        decrease the amount by 3
      </button>
    </div>
  );
};

export default UseReducerComponent;
