import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPosts, newChange, newChangeMessage, StateType} from "./components/State/state";



export let renderDom = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addMessage={addMessage} newChangeMessage={newChangeMessage} addposts={addPosts} friend={state.FriendsData} dialogs={state.DialogsData} messages={state.MessagesData} posts={state.DataPosts} newtextpost={state.Newtextpost} newChange={newChange} ChangeMessages={state.Newtextmessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}