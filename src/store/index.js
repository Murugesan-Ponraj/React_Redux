 
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import history from "./history.js"; 
import rootReducer from './rootReducer';

let isLocalState = false;
try
{
    let store = {};
    window.localStorage =   
        {
        get reduxState() {
            return store['localState'];
        },
        set reduxState(val) {
            store['localState'] = val;
        },
        getItem: key => store[key],
        setItem: (key, value) => { store[key] = value.toString(); },
        clear: () => { store = {}; }
        }; 
}
catch(ex){
  isLocalState = true;
}
const persistedState = isLocalState ? 
window.localStorage.getItem('localState') ? JSON.parse(window.localStorage.getItem('localState')) : {} : 
localStorage.getItem('localState') ? JSON.parse(localStorage.getItem('localState')) : {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    connectRouter(history)(rootReducer),
    persistedState,
  applyMiddleware(routerMiddleware(history))
  ); 
  //  applyMiddleware(sagaMiddleware) 
  //sagaMiddleware.run();
  
  store.subscribe(() => {
    isLocalState ? window.localStorage.setItem('localState', JSON.stringify(store.getState())) 
    : localStorage.setItem('localState', JSON.stringify(store.getState()));
});

export default store;
