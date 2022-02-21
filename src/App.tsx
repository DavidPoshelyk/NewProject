import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import LoginContainer from "./components/Login/Login_Container";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ContainerProfile} from "./components/Profile/ContainerProfile";
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/ContentContainer/Content_Container';



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
                            <ContentContainer>
                                <ContainerProfile/>
                            </ContentContainer>)
                    }}/>
                    <Route path='/friends' render={() => {
                        return (<ContentContainer>
                            <UsersContainer/>
                        </ContentContainer>)
                    }}/>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
