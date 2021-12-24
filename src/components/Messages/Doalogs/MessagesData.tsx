import React from "react";

import d from './MessagesData.module.css'

export const MessagesData = ({data,...props}:any) => {

    return (
        data.map((m:any)=> {return(<div className={d.dialogs}>
            <div className={d.you}>
                <div className={d.youI}><img src={m.images}/></div>
                <div className={d.youM}> {m.messages[0]} </div>
            </div>
            <div className={d.iam}>
                <div className={d.imaI}><img
                    src="https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg"/></div>
                <div className={d.iamM}>{m.messages[1]}</div>
            </div>
        </div>)})
    )
}

