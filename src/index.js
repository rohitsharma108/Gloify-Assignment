import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


ReactDOM.render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}>
    <App />
    </Provider>,
    document.querySelector('#root')
);