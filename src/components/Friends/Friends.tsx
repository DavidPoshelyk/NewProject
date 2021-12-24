import React from "react";
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";
import {StoreContext} from "../../StoreContext";


export function Friends() {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let FriendsMap = state.FriendsReducer.map((f: any) =>
                    <div className={s.friendsO}>
                        <img src={f.images}/>
                        <div><NavLink to="{f.id}"> {f.name}</NavLink></div>
                        <input type="checkbox"/>
                        {f.status ? <b>Online</b> : <b>Offline</b>}
                    </div>
                )
                return (<div>
                    <div className={s.friends}>
                        {FriendsMap}
                    </div>
                </div>)
            }
        }
        </StoreContext.Consumer>
    )
}

