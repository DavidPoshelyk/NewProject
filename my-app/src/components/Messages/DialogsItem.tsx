import React from "react";
import s from "./Messeges.module.css";
import {NavLink} from "react-router-dom";


 export type TypeDialogsItemData = {
    id: string
    name: string
}


export const DialogIteme = (props:TypeDialogsItemData) => {
    let past = '/dialogs/' + props.id
    return <div className={s.user}>
        <NavLink to={past}> {props.name} </NavLink>
    </div>
}
