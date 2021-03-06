import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import App from './routeConfigs';
import { ConnectedRouter } from 'connected-react-router' 
 import history from './store/history'

window.store = store;

ReactDOM.render(
    <Provider store={store}>
         <ConnectedRouter history={history} >
            <App />
            </ConnectedRouter>
    </Provider>
    , document.getElementById("root"));
