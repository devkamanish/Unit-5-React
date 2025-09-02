
import { LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    isAuthenticated  : false,

}
export const authReducer  = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN_SUCCESS :
            return {...state, isAuthenticated:true};
        default :
        return state
    }
}






