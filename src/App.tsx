import React from 'react';
import './App.css';
import "./components/Header/Header";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from './components/Users/UsersContainer';
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {ContainerProfile} from "./components/Profile/ContainerProfile";





function App() {

    return (
        <BrowserRouter>
            <div className="grid">
                <Header/>
                <Nav/>
                <div className='contents'>
                    <Route path='/profile' render={() => <ContainerProfile/>}/>
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                    <Route path='/friends' render={() => <UsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
