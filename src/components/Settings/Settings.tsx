import React from "react";
import s from './Settings.module.css'
import NavSettings from "./NavSettings";

import { Route} from "react-router-dom";



export function Settings({store,...props}:any) {
    return (
        <div className={s.globalSettings}>
            <div className={s.menuSettings}>
             <NavSettings/>
            </div>
            
        </div>

    )

}

