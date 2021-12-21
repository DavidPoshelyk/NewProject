import React, {ChangeEvent} from "react";
import s from './Messeges.module.css'
import {MessagesData} from "./Doalogs/MessagesData";
import {DialogsData} from "./DialogsData";
import {AddMessageActionCreator,  UpdateNewTextMessageActionCreator} from "../../Redux/Messages-reducer";




export function Messages({state,...props}: any) {
    let DialogsMap = state.DialogsReducer.map((d:any) => <DialogsData name={d.name} id={d.id} image={d.image}/>)
    let MessagesMap = state.MessagesReducer.data.map((m:any) => <MessagesData id={m.id} images={m.images} messages={m.messages}/>)



    let Push = () => {
        props.dispatch(AddMessageActionCreator());
        props.dispatch(UpdateNewTextMessageActionCreator(''))
    }
    let OnChangeMessages = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewTextMessageActionCreator(e.currentTarget.value))
    }



    return (
        <div className={s.messages}>
            <div>
                {DialogsMap}
            </div>
            <div className={s.dialogs}>
                {MessagesMap}
                <textarea onChange={OnChangeMessages}  value={state.MessagesReducer.Newtextmessage}/>
                <button onClick={Push}>Push</button>
            </div>
        </div>


    )
}

