import { useReducer, useState } from 'react';

enum ChangeColorActionKind {
  CHANGETOBLUE = 'CHANGETOBLUE',
  CHANGETORED = 'CHANGETORED',
  CHANGETOYOURCOLOR = 'CHANGETOYOURCOLOR',
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
    case ChangeColorActionKind.CHANGETOYOURCOLOR:
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
  const [inputValue, setInputValue] = useState('');

  const onSubmit = () => {
    dispatch({
      type: ChangeColorActionKind.CHANGETOYOURCOLOR,
      payload: inputValue,
    });
  };

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
      <input
        className="block"
        placeholder="write the color"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onSubmit}>Submit the color</button>
    </div>
  );
};

export default UseReducerComponent;
