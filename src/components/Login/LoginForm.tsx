import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../utils/validate";
import OutlinedButtons from "../../Bloc_Material_Ui/CustomButton/CustomButton";
import CheckboxLabels from "../../Bloc_Material_Ui/Chekbox/Chekbox_custom";
import ValidationTextFields from "../../Bloc_Material_Ui/Input_Text_Custom/ValidationTextFields";


const maxLength32 = maxLength(32)


function LoginForm (props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field nameInput='Login' component={ValidationTextFields} name='login' validate={[required,maxLength32]} type={'loginp][1oIUadVSZ\\'}/>
            <Field nameInput='Password' component={ValidationTextFields} name='password' validate={[required,maxLength32]} type={'password'}/>
            {props.error && <span style={{background:'red', color:'white'}}>{props.error}</span>}
            <Field type='checkbox' label="Remember Me" component={CheckboxLabels} name='checkbox'/>
            <OutlinedButtons  type='submit 'minWidth='320px'  name='Log In'/>
        </form>
    )

}
export default reduxForm<any,any>({form:'login' })(LoginForm)

