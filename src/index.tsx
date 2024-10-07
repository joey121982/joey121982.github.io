import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const root: any = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
