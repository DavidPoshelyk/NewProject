import React, {useEffect} from 'react';
import './App.css';
import "./components/Header/Header";
import {BrowserRouter, NavLink, Redirect, Route} from 'react-router-dom';
import ButtonAppBar from "./Bloc_Material_Ui/App Bar";
import NavContainer from './Bloc_Material_Ui/Nav/Nav_Container';
import СontentContainer from './Bloc_Material_Ui/Content/Content_Container';
import MenuListComposition from "./Bloc_Material_Ui/NavBar/Nav";
import GroupAvatars from "./Bloc_Material_Ui/GroupAvatars/GroupAvatars";
import Button from '@mui/material/Button';
import BasicPagination from "./component/Pagination/Pagination_Bloc";
import UsersBloc from "./Bloc_Material_Ui/Users/Users_Bloc";
import ProfileBloc from './Bloc_Material_Ui/Profile_Bloc/Profile_Bloc';
import Login from "./Bloc_Material_Ui/Login/Login_Container";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ContainerProfile} from "./components/Profile/ContainerProfile";
import LoginContainer from "./Bloc_Material_Ui/Login/Login_Container";
import UsersContainer from './components/Users/UsersContainer';



function App() {

    return (
        <>
            <BrowserRouter>
                <HeaderContainer/>
                <div className='containerItems'>
                    <Redirect from="/" to="profile" />

                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/profile' render={() => {
                        return(
                            <СontentContainer>
                                <ContainerProfile/>
                            </СontentContainer>

                        )
                    }}/>

                    <Route path='/friends' render={() => {
                        return(
                            <СontentContainer>
                                <UsersContainer/>
                            </СontentContainer>

                        )
                    }}/>



                    {/*<LoginContainer/>*/}







                        {/*<Route path='/profile' render={() => {*/}
                        {/*    return (*/}
                        {/*        <>*/}
                        {/*            <NavContainer>*/}
                        {/*                <MenuListComposition/>*/}
                        {/*                <GroupAvatars/>*/}
                        {/*            </NavContainer>*/}
                        {/*            <СontentContainer>*/}
                        {/*            <ProfileBloc/>*/}
                        {/*            </СontentContainer>*/}
                        {/*        </>*/}
                        {/*    )*/}
                        {/*}}/>*/}
                        {/*<Route path='/friends' render={() => {*/}
                        {/*    return (*/}
                        {/*        <>*/}
                        {/*            <NavContainer>*/}
                        {/*                <MenuListComposition/>*/}
                        {/*                <GroupAvatars/>*/}
                        {/*            </NavContainer>*/}
                        {/*            <СontentContainer>*/}
                        {/*            */}
                        {/*            </СontentContainer>*/}
                        {/*        </>*/}
                        {/*    )*/}
                        {/*}}/>*/}
                        {/*<div style={{background: 'red'}}>user</div>*/}
                        {/*<ProfileBloc/>*/}



                </div>


                {/*<HeaderContainer/>*/}
                {/*<Nav/>*/}
                {/*<div className='contents'>*/}

                {/*    <Route path='/messages' render={() => <MessagesContainer/>}/>*/}
                {/*    <Route path='/friends' render={() => <UsersAPIComponent/>}/>*/}
                {/*    <Route path='/settings' render={() => <Settings/>}/>*/}
                {/*    <Route path='/login' render={() => <Login/>}/>*/}
                {/*</div>*/}

            </BrowserRouter>


        </>);
}

export default App;
