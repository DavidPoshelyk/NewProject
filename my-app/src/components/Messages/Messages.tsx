import React from "react";
import s from './Messeges.module.css'
import {NavLink} from "react-router-dom";

type DialogItemeType = {
    name: string,
    id: string
}
let DialogsItemData = [
    {id:"1", name:'Kiriil'},
    {id:"2", name:'vitali'},
    {id:"3", name:'Andrey'},
    {id:"4", name:'Pavel'},
    {id:"5", name:'Anton'},
    {id:"6", name:'Saha'},
    {id:"7", name:'Sveta'},
    {id:"8", name:'Lena'}
    ]


type TypeMessagesData = {
    messages: string
}
let MessagesData = [
    {id: '1', messages: 'ygyuouy'},
    {id: '2', messages: 'uygyug'},
    {id: '3', messages: 'jhvuyvu'},
    {id: '4', messages: 'hbiybi'},
    {id: '5',messages: 'biojbuo'},
    {id: '6',messages: 'khbib'},
    {id: '7',messages: 'uihiu'},
    {id: '8',messages: 'ygyuouy'},
    {id: '9', messages: 'ygyuo,uy'},
    {id: '10', messages: 'ygyujoboubouy'},
    {id: '11', messages: 'ygyuouy'},
    {id: '12', messages: 'ygyuuhu9gouy'}
]


const MessagesItem: React.FC<TypeMessagesData> = (props) => {
    return <div> {props.messages} </div>
}
let MessagesMap = MessagesData.map( m => <MessagesItem messages={m.messages}/>)

const DialogIteme: React.FC<DialogItemeType> = (props) => {
    let past = '/dialogs/' + props.id
    return <div className={s.user}>
        <NavLink to={past}> {props.name} </NavLink>
    </div>
}
let DialogsItemDataMap = DialogsItemData.map( n => <DialogIteme name={n.name} id={n.id}/> )


export function Messages() {
    return (
        <div className={s.messages}>
            <div>
                {DialogsItemDataMap}

            </div>
            <div className={s.dialogs}>
                {MessagesMap}{MessagesMap}
                <input/>
                <button>Push</button>
            </div>
        </div>


    )
}

