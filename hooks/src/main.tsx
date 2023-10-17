import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ThemeContextProvider from './context/theme-context-provider.tsx';
import { CountContextProvider } from './context/count-context-provider.tsx';
import { ColorContextProvider } from './context/color-context-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CountContextProvider>
        <ColorContextProvider>
          <App />
        </ColorContextProvider>
      </CountContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
