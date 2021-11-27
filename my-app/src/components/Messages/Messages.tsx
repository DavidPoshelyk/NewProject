import React, {useRef} from "react";
import s from './Messeges.module.css'
import {MessagesData} from "./Doalogs/MessagesData";
import {DialogsData} from "./DialogsData";


type  Messages = {
    dispatch:Function
    state: any
}

export function Messages({state,...props}: Messages) {
    let DialogsMap = state.DialogsData.map((d:any) => <DialogsData name={d.name} id={d.id} image={d.image}/>)
    let MessagesMap = state.MessagesData.map((m:any) => <MessagesData id={m.id} images={m.images} messages={m.messages}/>)

    let newPost = useRef<HTMLTextAreaElement>(null);

    let Push = () => {
        props.dispatch({type:'ADD-MESSAGE'});
        props.dispatch({type:'UPDATE-NEW-TEXT-MESSAGE', Newtextmessage:''})
    }
    let OnChangeMessages = () => {
        let text = newPost.current?.value;
        props.dispatch({type:'UPDATE-NEW-TEXT-MESSAGE', Newtextmessage:text})
    }



    return (
        <div className={s.messages}>
            <div>
                {DialogsMap}
            </div>
            <div className={s.dialogs}>
                {MessagesMap}
                <textarea onChange={OnChangeMessages} ref={newPost} value={state.Newtextmessage}/>
                <button onClick={Push}>Push</button>
            </div>
        </div>


    )
}

