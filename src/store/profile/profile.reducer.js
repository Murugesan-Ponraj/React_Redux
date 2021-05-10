import {LOGIN,LOGOUT} from './profile.types'

let initialState = {
    userInfo: {
         userName:"",
         nickName:"",
         isLoggedIn:false,
         mailId:"",
         token:""
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userInfo: {
                    userName:action.userInfo.userName,
                    nickName:action.userInfo.nickName,
                    isLoggedIn:true,
                    mailId:action.userInfo.mailId,
                    token:action.userInfo.token
                }
            };

            case LOGOUT:
                return  initialState
        default:
            break;
    }
    return state;
}