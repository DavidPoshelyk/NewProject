import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import LoginContainer from "./components/Login/Login_Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import {ContainerProfile} from "./components/Profile/ContainerProfile";
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/ContentContainer/Content_Container';
import { connect } from 'react-redux';
import {appInitializedThunk} from "./Redux/App-reducer";

import CircularProgress from '@mui/material/CircularProgress';
import {Profile} from "./components/NewComponent/Profile";
import {Friends} from "./components/NewComponent/Friends";




class App extends React.Component<any,any> {
    componentDidMount() {
        this.props.appInitializedThunk()
    }

    render() {
        if(!this.props.initialized){
         return <div className='CircularProgress'><CircularProgress disableShrink /></div>
        }
        return (
            <>
                <BrowserRouter>
                    <HeaderContainer/>
                    <div className='containerItems'>
                        {/*<Redirect from="/" to="profile"/>*/}
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        initialized:state.AppReducer.initialized
    }

}

export default  connect(mapStateToProps, {appInitializedThunk})(App);
