import {combineReducers, createStore} from "redux";
import MessagesReducer from "./Messages-reducer";
import ProfileReducer from "./Profile-reducer";
import SettingsReducer from "./Settings-reducer";
import DialogsReducer from "./Dialogs-reducer";
import  UsersReducer  from "./Users-reducer";
import AuthReducer from "./auth-reducer";


let reducers = combineReducers({
    MessagesReducer,
    ProfileReducer,
    SettingsReducer,
    UsersReducer,
    DialogsReducer,
    AuthReducer
})


let store = createStore(reducers);



export default store
// @ts-ignore
window.store = store