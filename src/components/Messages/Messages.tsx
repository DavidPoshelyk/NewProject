import React, {ChangeEvent} from "react";
import s from './Messeges.module.css'
import {DialogsContainer} from "./DialogsContainer";
import {MessagesDataContainer} from "./Doalogs/MessagesDataContainer";

type TypeMessages = {
    value: string,
    onChangeMessages:(e:ChangeEvent<HTMLTextAreaElement> )=> void,
    push:()=>void


}

export function Messages({value,onChangeMessages,push,...props}:TypeMessages) {
    return (
        <div className={s.messages}>
                    <div>
                        <DialogsContainer/>
                    </div>
                    <div className={s.dialogs}>
                        <MessagesDataContainer/>
                        <textarea onChange={onChangeMessages} value={value}/>
                        <button onClick={push}>Push</button>
                    </div>
                </div>)



}

