import React from 'react';
import  {Field, reduxForm} from "redux-form";


const Login = () => {
    return (
        <div style={{border:'1px solid'}}>
            <h1>Login</h1>
            <form>
                <div>
                    <Field placeholder='login' componet='input' name='login'/>
                </div>
                <div><Field placeholder='password' component='input' name='password'/></div>
               <div><Field type='checkbox' component='input' name='checkbox'/></div>
            </form>
            <div>
                <button>Sing In</button>

            </div>
        </div>
    );
};


export default reduxForm({form:'login'})(Login)