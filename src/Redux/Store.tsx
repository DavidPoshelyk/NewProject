import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import  UsersReducer  from "./Users-reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as reduxFormReducer } from 'redux-form'


const rootReducer = combineReducers({
    ProfileReducer,
    UsersReducer,
    AuthReducer,
    form:reduxFormReducer
})


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>


export default store
// @ts-ignore
window.store = store