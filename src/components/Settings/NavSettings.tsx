import React from "react";
import s from './Settings.module.css'
import {NavLink} from "react-router-dom";


function NavSettings ()    {

    return(
        <div className={s.navSettings}>
           <div>
               <NavLink activeClassName={s.active} to='/settings/general'> General</NavLink>
           </div>
           <div>
               <NavLink activeClassName={s.active} to='/security'> Security</NavLink>
           </div>
           <div>
               <NavLink activeClassName={s.active} to='/confidentiality'> Confidentiality</NavLink>
           </div>
           <div>
               <NavLink activeClassName={s.active} to='/notifications'> Notifications</NavLink>
           </div>
           <div>
               <NavLink activeClassName={s.active} to='/blacklist'> Blacklist</NavLink>
           </div>
        </div>
    )
}



export default NavSettings