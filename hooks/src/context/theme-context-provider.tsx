import { createContext, useState } from 'react';

// enum ThemeActionTypes {
//   LIGHT = 'LIGHT',
//   DARK = 'DARK',
// }

// interface ThemeAction {
//   type: ThemeActionTypes;
//   payload: string;
// }

// interface ThemeState {
//   theme: string;
// }

// function themeChangeReducer(state: ThemeState, action: ThemeAction) {
//   const { type } = action;
//   switch (type) {
//     case ThemeActionTypes.LIGHT:
//       return {
//         ...state,
//         theme: 'light',
//       };

//     case ThemeActionTypes.DARK:
//       return {
//         ...state,
//         theme: 'dark',
//       };

//     default:
//       return state;
//   }
// }

export const ThemeContext = createContext({
  theme: 'dark',
});
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  // const [state, dispatch] = useReducer(themeChangeReducer, {
  //   theme: 'light',
  // });
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
      }}>
      <button
        className="bg-black text-white p-4 flex items-center justify-center"
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark';
          })
        }>
        toggle theme
      </button>

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
