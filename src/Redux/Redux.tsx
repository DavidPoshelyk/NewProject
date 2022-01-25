import {applyMiddleware, combineReducers, createStore} from "redux";
import MessagesReducer from "./Messages-reducer";
import ProfileReducer from "./Profile-reducer";
import SettingsReducer from "./Settings-reducer";
import DialogsReducer from "./Dialogs-reducer";
import  UsersReducer  from "./Users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    MessagesReducer,
    ProfileReducer,
    SettingsReducer,
    UsersReducer,
    DialogsReducer,
    AuthReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store
// @ts-ignore
window.store = store