import React from 'react';
import ValidationTextFields from '../Input_Text/ValidationTextFields';
import s from './Login_Container.module.css'
import OutlinedButtons from "../../component/CustomButton/CustomButton";
import CheckboxLabels from "../../component/Chekbox/Chekbox_custom";

const LoginContainer = () => {
    return (
        <div className={s.LoginContainer}>
            <div className={s.form}>
                <h1 className={s.family}>Log in</h1>
                <ValidationTextFields/>
                <ValidationTextFields/>
                <CheckboxLabels/>
                <OutlinedButtons minWidth='320px'  name='Log In'/>
            </div>
        </div>
    );
};

export default LoginContainer;