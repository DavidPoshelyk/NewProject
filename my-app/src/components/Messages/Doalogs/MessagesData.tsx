import React from "react";
import {TypeMessages} from "../../State/state";
import d from './MessagesData.module.css'

export const MessagesData: React.FC<TypeMessages> = (props) => {

    return <div className={d.dialogs}>
        <div className={d.you}>
            <div className={d.youI}><img src={props.images}/></div>
            <div className={d.youM}> {props.messages[0]} </div>
        </div>
        <div className={d.iam}>
            <div className={d.imaI}><img
                src="https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg"/></div>
            <div className={d.iamM}>{props.messages[1]}</div>
        </div>
    </div>
}

