import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css"

export function Nav() {
    return (<div className={s.nav}>
            <div>
                <li><NavLink activeClassName={s.active} to='/contents'> Profile</NavLink></li>
            </div>
            <div>
                <li><NavLink activeClassName={s.active} to='/messages'> Messages</NavLink></li>
            </div>
            <div>
                <li><NavLink activeClassName={s.active} to='/friends'> Friends</NavLink></li>
            </div>
            <div>
                <li><NavLink activeClassName={s.active} to='/settings'> Settings </NavLink></li>
            </div>
        </div>
    )


}