import React, {useState} from "react";
import s from './Friends.module.css'
import {TypeFriends} from "../State/state";
import { NavLink } from "react-router-dom";

type Friends = {
    friend: Array<TypeFriends>
}

export function Friends(props: Friends) {



    let FriendsMap = props.friend.map(f =>
        <div className={s.friendsO}>
            <img src={f.images}/>
            <div>  <NavLink to="{f.id}"> {f.name}</NavLink></div>
            <input type="checkbox" />
            {f.status  ? <b>Online</b> : <b>Offline</b>}
        </div>
)
    let [a,Colums]=useState(1)
    const styleFridens = {
        gridTemplateColumns: a == 1 ?' 1fr ': a == 2 ? '1fr 1fr': a == 3 ? '1fr 1fr 1fr': a == 4 ? '1fr 1fr 1fr 1fr':  ''}


    return ( <div>

            <button onClick={()=> Colums(1)}>Columns 1</button>
            <button onClick={()=> Colums(2)}>Columns 2</button>
            <button onClick={()=> Colums(3)}>Columns 3</button>
            <button onClick={()=> Colums(4)}>Columns 4</button>

            <div style={styleFridens} className={s.friends}>
        {FriendsMap}
    </div>
</div>
)
}

