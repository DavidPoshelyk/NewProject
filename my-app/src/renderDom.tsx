import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts, StateType} from "./components/State/state";



export let renderDom = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addposts={addPosts} friend={state.FriendsData} dialogs={state.DialogsData}
                 messages={state.MessagesData} posts={state.DataPosts}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}