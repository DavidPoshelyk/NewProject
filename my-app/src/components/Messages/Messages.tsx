import React, {useRef} from "react";
import s from './Messeges.module.css'
import {MessagesData} from "./Doalogs/MessagesData";
import {DialogsData} from "./DialogsData";
import { TypeDialogs, TypeMessages} from "../State/state";

type  Messages = {
    dialogs: Array<TypeDialogs>
    messages: Array<TypeMessages>
    Newtextmessage: string
    addMessage:()=>void
    newChangeMessage:(text:string|undefined)=> void
}

export function Messages(props: Messages) {
    let DialogsMap = props.dialogs.map((d) => <DialogsData name={d.name} id={d.id} image={d.image}/>)
    let MessagesMap = props.messages.map((m) => <MessagesData id={m.id} images={m.images} messages={m.messages}/>)

    let newPost = useRef<HTMLTextAreaElement>(null);

    let Push = () => {
        props.addMessage()
        props.newChangeMessage('')
    }
    let OnChangeMessages = () => {
        let text = newPost.current?.value;
        props.newChangeMessage(text)
    }



    return (
        <div className={s.messages}>
            <div>
                {DialogsMap}
            </div>
            <div className={s.dialogs}>
                {MessagesMap}
                <textarea onChange={OnChangeMessages} ref={newPost} value={props.Newtextmessage}/>
                <button onClick={Push}>Push</button>
            </div>
        </div>


    )
}

