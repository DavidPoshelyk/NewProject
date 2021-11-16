import React from "react";
import s from "./Messeges.module.css";
import {NavLink} from "react-router-dom";
import {TypeDialogs} from "../State/state";





export const DialogsData = (props:TypeDialogs) => {
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
