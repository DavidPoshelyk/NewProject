import React from "react";
import s from "./Messeges.module.css";
import {NavLink} from "react-router-dom";






export const DialogsData = (props:any) => {
    let past = '/dialogs/' + props.id
    return <div className={s.user}>
        <div>
            <img src={props.image}/>
        </div>


        <div>
            <NavLink to={past}> {props.name} </NavLink>
        </div>

        </div>
}
