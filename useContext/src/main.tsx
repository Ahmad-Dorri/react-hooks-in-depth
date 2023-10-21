import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CountContextProvider } from './context/counter-context-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </React.StrictMode>
);
