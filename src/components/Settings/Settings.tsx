import React from "react";
import s from './Settings.module.css'
import NavSettings from "./NavSettings";
import GeneralSettings from "./MenuSettings/GeneralSettings";
import { Route} from "react-router-dom";
import ConfidentialitySettings from "./MenuSettings/ConfidentialitySettings";
import SecuritySettings from "./MenuSettings/SecuritySettings";




export function Settings({store,...props}:any) {
    return (
        <div className={s.globalSettings}>
            <div className={s.menuSettings}>
             <NavSettings/>
            </div>
            <div className={s.settings}>
                <Route path='/settings/general' render={() => <GeneralSettings/> }/>
                <Route path='/security' render={() => <ConfidentialitySettings/> }/>
                <Route path='/confidentiality' render={() => <SecuritySettings/>}/>
            </div>
        </div>

    )

}

