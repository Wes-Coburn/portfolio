import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/index.css';

if (process.env.NODE_ENV !== 'production') {
  const devTools = await import('./test/devTools');
  devTools.default();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
