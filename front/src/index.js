import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import rootReducer from './store/recuders/RootReducer'


import registerServiceWorker from './registerServiceWorker';

const myStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <BrowserRouter>
    <Provider store = { myStore }>
        <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();