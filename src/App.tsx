import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import СontentContainer from './components/ContentContainer/Content_Container';
import LoginContainer from "./components/Login/Login_Container";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ContainerProfile} from "./components/Profile/ContainerProfile";
import UsersContainer from './components/Users/UsersContainer';


function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderContainer/>
                <div className='containerItems'>
                    <Redirect from="/" to="profile"/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/profile' render={() => {
                        return (
                            <СontentContainer>
                                <ContainerProfile/>
                            </СontentContainer>)
                    }}/>
                    <Route path='/friends' render={() => {
                        return (<СontentContainer>
                            <UsersContainer/>
                        </СontentContainer>)
                    }}/>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
