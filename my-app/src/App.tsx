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




type App = {
    state:any
    dispatch:(action:any)=>void

}

function App(props: App) {
    // console.log(props)
    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Nav/>
                <div className='contents'>
                    <Route path='/contents' render={() => <Contents  dispatch={props.dispatch} state={props.state} />}/>
                    <Route path='/messages' render={() => <Messages state={props.state} dispatch={props.dispatch} />}/>
                    <Route path='/friends' render={() => <Friends friend={props.state.FriendsData} />}/>
                    <Route path='/settings' render={() => <Settings dispatch={props.dispatch} state={props.state} />}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
