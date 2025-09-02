
import { authReducer } from "./reducer1";
import { quizReducer } from "./reducer2";
import { combineReducers, createStore } from 'redux'

  export  const rootReducer = combineReducers({
        auth : authReducer,
        quiz : quizReducer,
    })
    


    