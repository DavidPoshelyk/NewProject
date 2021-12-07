import React from "react";
import s from './Settings.module.css'
import NavSettings from "./NavSettings";
import GeneralSettings from "./MenuSettings/GeneralSettings";
import {BrowserRouter, Route} from "react-router-dom";
import ConfidentialitySettings from "./MenuSettings/ConfidentialitySettings";
import SecuritySettings from "./MenuSettings/SecuritySettings";
import {_stateType} from "../State/state";

type TypeSettings = {
    state:_stateType
    dispatch:Function
}



export function Settings({state,dispatch,...props}:TypeSettings) {
    return (
        <div className={s.globalSettings}>
            <div className={s.menuSettings}>
             <NavSettings/>
            </div>
            <div className={s.settings}>
                <Route path='/settings/general' render={() => <GeneralSettings state={state} dispatch={dispatch}/> }/>
                <Route path='/security' render={() => <ConfidentialitySettings/> }/>
                <Route path='/confidentiality' render={() => <SecuritySettings/>}/>
            </div>
        </div>

    )

}

