import React from 'react';
import './App.css';
import "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import UsersAPIComponent from './components/Users/UsersContainer';
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import  {ContainerProfile} from "./components/Profile/ContainerProfile";
import Login from './components/Login/Login';





function App() {

    return (
        <BrowserRouter>
            <div className="grid">
                <HeaderContainer/>
                <Nav/>
                <div className='contents'>
                    <Route path='/profile/:userId?' render={() => <ContainerProfile/>}/>
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                    <Route path='/friends' render={() => <UsersAPIComponent/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
