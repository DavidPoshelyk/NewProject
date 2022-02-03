import React from 'react';
import s from './Login.module.css'

const Login = () => {
    return (
        <div className={s.title}>
            <h1 >Login</h1>
            <input type='text'/>
            <input type='text'/>
            <div>
                <button>Sing In</button>

            </div>
        </div>
    );
};

export default Login;