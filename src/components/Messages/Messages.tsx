import React, {ChangeEvent} from "react";
import s from './Messeges.module.css'
import {DialogsContainer} from "./DialogsContainer";
import {MessagesDataContainer} from "./Doalogs/MessagesDataContainer";
import {Field, reduxForm} from "redux-form";
import {InputText} from "../../component/InputText";
import {maxLength, required} from "../../utils/validate";

const maxLength15 = maxLength(15)

const MessagesForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.dialogs}>
            <MessagesDataContainer/>
            <Field component={InputText} type='text' name='sendMessage' validate={[required,maxLength15]}/>
            <button>send</button>
        </form>

    )

}
let ReduxMessagesForm = reduxForm<any, any>({form: 'sendMessage'})(MessagesForm)

export function Messages({AddMessageACThunk, ...props}:any) {
    return (
        <div className={s.messages}>
            <div>
                <DialogsContainer/>
            </div>
            <div>
                <ReduxMessagesForm onSubmit={(formData: {sendMessage:string}) => {
                    AddMessageACThunk(formData.sendMessage)
                }}/>
            </div>

        </div>)


}



