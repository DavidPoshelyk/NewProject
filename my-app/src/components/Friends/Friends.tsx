import React from "react";
import s from './Friends.module.css'
import {TypeFriends} from "../State/state";

type Friends = {
    friend: Array<TypeFriends>
}
export function Friends(props:Friends) {
    let FriendsMap = props.friend.map(f =>
        <div className={s.friends}>
            <div className={s.images}>
               <img src={f.images}/>
            </div>
            <div className={s.name}>
                <div>{f.name}</div>
                <div>{f.id}</div>
                <input type="checkbox" checked={f.status}/>






            </div>
        </div>)

    return (
        <div>{FriendsMap}</div>
    )

}

