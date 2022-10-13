import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App appTitle="Person Manager" />
);
registerServiceWorker();
