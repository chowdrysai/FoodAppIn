import React from 'react';
import ReactDOM from 'react-dom';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(   /* eslint-disable-line*/
    <Provider store = {store}>
        <App />
    </Provider> 
    ,
    document.getElementById('root'));


