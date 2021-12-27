import {combineReducers, createStore} from "redux";
import MessagesReducer from "./Messages-reducer";
import PostsReducer from "./Posts-reducer";
import SettingsReducer from "./Settings-reducer";
import DialogsReducer from "./Dialogs-reducer";
import  FriendsReducer  from "./Friends-reducer";




let reducers = combineReducers({
    MessagesReducer:MessagesReducer,
    PostsReducer:PostsReducer,
    SettingsReducer:SettingsReducer,
    FriendsReducer:FriendsReducer,
    DialogsReducer:DialogsReducer
})


let store = createStore(reducers);


export default store