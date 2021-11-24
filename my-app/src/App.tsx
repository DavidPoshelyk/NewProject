import React from 'react';
import './App.css';
import "./components/Header/Header";
import {Header} from "./components/Header/Header";
import {Contents} from "./components/Contents/Contents";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {Messages} from "./components/Messages/Messages";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {
    addMessage,
    newChange,
    newChangeMessage,
    TypeDialogs,
    TypeFriends,
    TypeMessages,
    TypePosts
} from "./components/State/state";


type App = {
    posts: Array<TypePosts> ,
    dialogs: Array<TypeDialogs>,
    messages: Array<TypeMessages>,
    friend: Array<TypeFriends>
    addposts: () => void
    newtextpost:any
    ChangeMessages:any
    newChange: Function
    addMessage: () => void
    newChangeMessage:Function

}

function App(props: App) {
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Nav/>
                <div className='contents'>
                    <Route path='/contents' render={() => <Contents  newChange={newChange} newtextpost={props.newtextpost} addpost={props.addposts} posts={props.posts}/>}/>
                    <Route path='/messages' render={() => <Messages newChangeMessage={newChangeMessage} addMessage={addMessage} ChangeMessages={props.ChangeMessages} dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/friends' render={() => <Friends friend={props.friend} />}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
