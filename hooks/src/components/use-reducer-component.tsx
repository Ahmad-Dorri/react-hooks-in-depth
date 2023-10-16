import { useReducer } from 'react';

enum ChangeColorActionKind {
  CHANGETOBLUE = 'CHANGETOBLUE',
  CHANGETORED = 'CHANGETORED',
}

type ChangeColorAction = {
  type: ChangeColorActionKind;
  payload: string;
};

type ChangeColorState = {
  color: string;
};

function changeColorReducer(
  state: ChangeColorState,
  action: ChangeColorAction
) {
  const { type, payload } = action;
  switch (type) {
    case ChangeColorActionKind.CHANGETOBLUE:
      return {
        ...state,
        color: payload,
      };

    case ChangeColorActionKind.CHANGETORED:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(changeColorReducer, {
    color: '#ff2',
  });
  return (
    <div
      style={{
        backgroundColor: state.color,
      }}>
      UseReducerComponent
      <button
        onClick={() =>
          dispatch({
            type: ChangeColorActionKind.CHANGETOBLUE,
            payload: '#22f',
          })
        }>
        change the background to blue
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ChangeColorActionKind.CHANGETOBLUE,
            payload: '#f22',
          })
        }>
        change the background to red
      </button>
    </div>
  );
};

export default UseReducerComponent;
