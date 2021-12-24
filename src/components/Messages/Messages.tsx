import React, {ChangeEvent} from "react";
import s from './Messeges.module.css'
import {MessagesData} from "./Doalogs/MessagesData";
import {DialogsData} from "./DialogsData";
import {AddMessageActionCreator, UpdateNewTextMessageActionCreator} from "../../Redux/Messages-reducer";
import {StoreContext} from "../../StoreContext";


export function Messages() {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let DialogsMap = state.DialogsReducer.map((d: any) => <DialogsData name={d.name} id={d.id}
                                                                                   image={d.image}/>)
                let MessagesMap = state.MessagesReducer.data.map((m: any) => <MessagesData id={m.id} images={m.images}
                                                                                           messages={m.messages}/>)
                let Push = () => {
                    store.dispatch(AddMessageActionCreator());
                    store.dispatch(UpdateNewTextMessageActionCreator(''))
                }
                let OnChangeMessages = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(UpdateNewTextMessageActionCreator(e.currentTarget.value))
                }

                return (<div className={s.messages}>
                    <div>
                        {DialogsMap}
                    </div>
                    <div className={s.dialogs}>
                        {MessagesMap}
                        <textarea onChange={OnChangeMessages} value={state.MessagesReducer.Newtextmessage}/>
                        <button onClick={Push}>Push</button>
                    </div>
                </div>)
            }
        }</StoreContext.Consumer>
    )
}

