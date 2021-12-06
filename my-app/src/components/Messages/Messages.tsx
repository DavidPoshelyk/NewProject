import React, {useRef} from "react";
import s from './Messeges.module.css'
import {MessagesData} from "./Doalogs/MessagesData";
import {DialogsData} from "./DialogsData";
import {_stateType, AddMessageActionCreator,  UpdateNewTextMessageActionCreator} from "../State/state";


type  Messages = {
    dispatch: ({})=> void
    state: _stateType

}
export function Messages({state,...props}: Messages) {
    let DialogsMap = state.DialogsData.map(d => <DialogsData name={d.name} id={d.id} image={d.image}/>)
    let MessagesMap = state.MessagesData.map(m => <MessagesData id={m.id} images={m.images} messages={m.messages}/>)

    let newPost = useRef<HTMLTextAreaElement>(null);

    let Push = () => {
        props.dispatch(AddMessageActionCreator());
        props.dispatch(UpdateNewTextMessageActionCreator(''))
    }
    let OnChangeMessages = () => {
        let text = newPost.current?.value;
        if(text) props.dispatch(UpdateNewTextMessageActionCreator(text))
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

