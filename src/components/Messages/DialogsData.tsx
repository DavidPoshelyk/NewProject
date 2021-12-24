import React from "react";
import s from "./Messeges.module.css";
import {NavLink} from "react-router-dom";



export const DialogsData = ({data,...props}:any) => {

    return(
        data.map((m:any)=> {
            let past = '/dialogs/' + m.id
            return(<div className={s.user}><div><img src={m.image}/></div><div><NavLink to={past}> {m.name} </NavLink></div></div>)})
    )

}
