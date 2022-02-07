import {Field, reduxForm} from "redux-form";
import React from "react";
import {textInput} from "../../component/InputText";
import {maxLength, required} from "../../utils/validate";
const maxLength12 = maxLength(12)




function LoginForm (props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' component={textInput} name='login' validate={[required,maxLength12]}/>
            </div>
            <div>
                <Field placeholder='password' component={textInput} name='password' validate={[required,maxLength12]}/>
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

