import React from "react";
import s from './Messeges.module.css'
import {DialogsItemDataMap} from "./DialogsItem";
import {MessagesMap} from "./MessagesItem";


export function Messages() {
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

