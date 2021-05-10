import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from './history'

import profileReducer from './profile/profile.reducer';


const rootReducer = combineReducers({ 
    profileReducer: profileReducer,
   router: connectRouter(history), 

});

export default rootReducer;
