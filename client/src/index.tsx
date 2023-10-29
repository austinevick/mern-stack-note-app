import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NoteAppProvider } from './context/NoteContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NoteAppProvider>
      <App />
    </NoteAppProvider>
  </React.StrictMode>
);