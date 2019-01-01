import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// Importing Assets
import "./assets/styles/normalize.css";
import './assets/styles/index.css';
import "./assets/styles/vendor.css";

// Importing Container
import App from './containers/App';
import { Provider } from "react-redux";


import store from "./store";

import express from 'express';
import secure from 'ssl-express-www';
 
const app = express();
 
app.use(secure);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
