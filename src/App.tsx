import React from 'react';
import './App.css';
import "./components/Header/Header";
import {BrowserRouter} from 'react-router-dom';
import ButtonAppBar from "./Bloc_Material_Ui/App Bar";
import NavContainer from './Bloc_Material_Ui/Nav/Nav_Container';
import СontentContainer from './Bloc_Material_Ui/Content/Content_Container';
import MenuListComposition from "./Bloc_Material_Ui/NavBar/Nav";
import GroupAvatars from "./Bloc_Material_Ui/GroupAvatars/GroupAvatars";
import Button from '@mui/material/Button';
import BasicPagination from "./component/Pagination/Pagination_Bloc";
import UsersBloc from "./Bloc_Material_Ui/Users/Users_Bloc";


function App() {

    return (
        <>
        <BrowserRouter>
            <ButtonAppBar/>
            <div className='containerItems'>
                {/*<LoginContainer/>*/}
                <NavContainer>
                    <MenuListComposition/>
                    <GroupAvatars/>
                </NavContainer>
                <СontentContainer>
<UsersBloc/>
                    {/*<div style={{background: 'red'}}>user</div>*/}
                    {/*<ProfileBloc/>*/}
                </СontentContainer>


            </div>


                {/*<HeaderContainer/>*/}
                {/*<Nav/>*/}
                {/*<div className='contents'>*/}
                {/*    <Route path='/profile/:userId?' render={() => <ContainerProfile/>}/>*/}
                {/*    <Route path='/messages' render={() => <MessagesContainer/>}/>*/}
                {/*    <Route path='/friends' render={() => <UsersAPIComponent/>}/>*/}
                {/*    <Route path='/settings' render={() => <Settings/>}/>*/}
                {/*    <Route path='/login' render={() => <Login/>}/>*/}
                {/*</div>*/}

        </BrowserRouter>


  </>  );
}

export default App;
