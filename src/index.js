import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
const store = createStore(
    myReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
