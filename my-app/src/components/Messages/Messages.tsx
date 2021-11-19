import React, {useRef} from "react";
import s from './Messeges.module.css'
import {MessagesData} from "./Doalogs/MessagesData";
import {DialogsData} from "./DialogsData";
import {TypeDialogs, TypeMessages} from "../State/state";

type  Messages = {
    dialogs: Array<TypeDialogs>
    messages: Array<TypeMessages>
}

export function Messages(props: Messages) {
    let DialogsMap = props.dialogs.map((d) => <DialogsData name={d.name} id={d.id} image={d.image}/>)
    let MessagesMap = props.messages.map((m) => <MessagesData id={m.id} images={m.images} messages={m.messages}/>)

    let newPost = useRef<HTMLTextAreaElement>(null);

    let Push = () => {
        let text = newPost.current?.value;
        return alert(text)
    }



    return (
        <div className={s.messages}>
            <div>
                {DialogsMap}
            </div>
            <div className={s.dialogs}>
                {MessagesMap}
                <textarea ref={newPost}>  </textarea>
                <button onClick={Push}>Push</button>
            </div>
        </div>


    )
}

