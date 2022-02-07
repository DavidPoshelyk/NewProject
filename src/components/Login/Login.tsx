import React from 'react';
import { connect } from 'react-redux';
import LoginForm from "./LoginForm";
import {authLoginThunk} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";



 const Login = (props:any) => {
    const onSubmit = (formData:any) =>{

       props.authLoginThunk(formData.login, formData.password, true)
        console.log(props.isAuth)
    }

    if(props.isAuth)  return <Redirect to={'/profile/:userId?'}/>
    return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        );
    }

const mapDispatchToProps = (state:any) => {
     return{
         isAuth: state.AuthReducer.isAuth
     }

}
export  default connect(mapDispatchToProps, {authLoginThunk})(Login)


