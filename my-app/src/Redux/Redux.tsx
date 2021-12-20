import {combineReducers, createStore} from "redux";
import MessagesReducer from "./Messages-reducer";
import PostsReducer from "./Posts-reducer";
import SettingsReducer from "./Settings-reducer";



let reducers = combineReducers({
    MessagesReducer:MessagesReducer,
    PostsReducer:PostsReducer,
    SettingsReducer:SettingsReducer
})


let store = createStore(reducers);


export default store