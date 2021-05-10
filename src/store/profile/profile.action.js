 import {LOGIN,LOGOUT} from './profile.types'

 export const login = (userInfo) => {

    return {

        type: LOGIN,
        userInfo: userInfo

    };

};

export const logout = () => {

    return { 
       type: LOGOUT,

    };

};
