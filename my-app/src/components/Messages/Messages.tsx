import React from "react";
import s from './Messeges.module.css'
import {DialogIteme, TypeDialogsItemData} from "./DialogsItem";
import {MessagesItem} from "./MessagesItem";
import {TypeMessagesData} from "../../index";

export type PropsType = {
    dialogs: TypeDialogsItemData[];
    messages: TypeMessagesData[]
}



export function Messages(props: PropsType) {
    let DialogsItemDataMap = props.dialogs.map(d => <DialogIteme name={d.name} id={d.id}/> )
    let MessagesMap = props.messages.map( (m:any)=> <MessagesItem messages={m.messages}/>)

    return (
        <div className={s.messages}>
            <div>
                {DialogsItemDataMap}
            </div>
            <div className={s.dialogs}>
                {MessagesMap}
                <input/>
                <button>Push</button>
            </div>
        </div>


    )
}

