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
import {StateType} from "./components/State/state";



type App = {
    state:StateType
    addposts: () => void
    newChange: (text: any) => void;
    addMessage: () => void;
    newChangeMessage: (text:string|undefined)=> void

}

function App(props: App) {
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Nav/>
                <div className='contents'>
                    <Route path='/contents' render={() => <Contents  newChange={props.newChange} newtextpost={props.state.Newtextpost} addPosts={props.addposts}  posts={props.state.DataPosts}/>}/>
                    <Route path='/messages' render={() => <Messages newChangeMessage={props.newChangeMessage} addMessage={props.addMessage} Newtextmessage={props.state.Newtextmessage} dialogs={props.state.DialogsData} messages={props.state.MessagesData}/>}/>
                    <Route path='/friends' render={() => <Friends friend={props.state.FriendsData} />}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
