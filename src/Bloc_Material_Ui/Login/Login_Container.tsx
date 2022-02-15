import React from 'react';
import s from './Login_Container.module.css'
import LoginForm from '../../components/Login/LoginForm';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authLoginThunk} from "../../Redux/auth-reducer";

const LoginContainer = (props:any) => {
    const onSubmit = (formData:any) =>{
        props.authLoginThunk(formData.login, formData.password, true)
        console.log(props.isAuth)
    }

    if(props.isAuth)  return <Redirect to={'/profile'}/>
    return (
        <div className={s.LoginContainer}>
            <div className={s.form}>
                <h1 className={s.family}>Log in</h1>
                <LoginForm onSubmit={onSubmit}/>
                {/*<ValidationTextFields/>*/}
                {/*<ValidationTextFields/>*/}
                {/*<CheckboxLabels/>*/}
                {/*<OutlinedButtons minWidth='320px'  name='Log In'/>*/}
            </div>
        </div>
    );
};

const mapDispatchToProps = (state:any) => {
    return{
        isAuth: state.AuthReducer.isAuth
    }

}
export  default connect(mapDispatchToProps, {authLoginThunk})(LoginContainer)


