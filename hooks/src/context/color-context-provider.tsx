import { createContext, useReducer } from 'react';

export enum ColorActionTypes {
  CHANGECOLOR = 'CHANGECOLOR',
}

type ColorState = {
  color: string;
};

type ColorAction = {
  type: ColorActionTypes;
  payload: string;
};

const initialState = {
  color: '#ff2',
};

const colorReducer = (state: ColorState, action: ColorAction) => {
  const { type, payload } = action;
  switch (type) {
    case ColorActionTypes.CHANGECOLOR:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};

const ColorContext = createContext<{
  state: ColorState;
  dispatch: React.Dispatch<ColorAction>;
}>({
  state: {
    color: '',
  },
  dispatch: () => null,
});

function ColorContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}

export { ColorContextProvider, ColorContext };
