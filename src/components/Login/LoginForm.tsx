import {Field, reduxForm} from "redux-form";
import React from "react";

function LoginForm (props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' component='input' name='login'/>
            </div>
            <div>
                <Field placeholder='password' component='input' name='password'/>
            </div>
            <div>
                <Field type='checkbox' component='input' name='checkbox'/>
            </div>
            <div>
                <button type='submit'>Sing In</button>
            </div>
        </form>
    )

}
export default reduxForm<any,any>({form:'login' })(LoginForm)

