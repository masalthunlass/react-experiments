import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from "./reducer/Store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))), document.querySelector('#app'));
