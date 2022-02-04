import React from 'react';
import {Field, reduxForm} from 'redux-form';


const Login = () => {


        return (
            <form>
                <h1>Login</h1>
                <div>
                    <div>
                        <Field placeholder='login' component='input' name='login'/>
                    </div>
                    <div>
                        <Field placeholder='password' component='input' name='password'/>
                    </div>
                    <div>
                        <Field type='checkbox' component='input' name='checkbox'/>
                    </div>
                </div>
                <div>
                    <button>Sing In</button>
                </div>
            </form>
        );
    }




export const LoginReduxForm  = reduxForm<any, any>({form: 'login'})(Login);
