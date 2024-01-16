// For async await polyfill
import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { renderRoutes } from "react-router-config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    window.__INITITAL_STATE__, 
    composeEnhancers(applyMiddleware(thunk)
));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
            {/* <Routes /> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);