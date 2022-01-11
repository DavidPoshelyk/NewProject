import {combineReducers, createStore} from "redux";
import MessagesReducer from "./Messages-reducer";
import ProfileReducer from "./Profile-reducer";
import SettingsReducer from "./Settings-reducer";
import DialogsReducer from "./Dialogs-reducer";
import  UsersReducer  from "./Users-reducer";


let reducers = combineReducers({
    MessagesReducer,
    ProfileReducer,
    SettingsReducer,
    UsersReducer,
    DialogsReducer
})


let store = createStore(reducers);


export default store