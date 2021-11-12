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
import {TypeDataItem, TypeDialogsItemData, TypeMessagesData} from "./index";

export type PropsType = {
    dialogs: TypeDialogsItemData[]
    messages: TypeMessagesData[]
    posts:any
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Nav/>
                <div className='contents'>
                    <Route path='/contents' render={() => <Contents posts={props.posts}/>}/>
                    <Route path='/messages' render={() => <Messages  dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
