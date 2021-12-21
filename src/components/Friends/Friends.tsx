import React, {useState} from "react";
import s from './Friends.module.css'

import { NavLink } from "react-router-dom";



export function Friends(props: any) {



    let FriendsMap = props.friend.map((f:any) =>
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
        <div className={s.colums}>
            <button onClick={()=> Colums(1)}></button>
            <button onClick={()=> Colums(2)}></button>
            <button onClick={()=> Colums(3)}></button>
            <button onClick={()=> Colums(4)}></button>
        </div>
            <div style={styleFridens} className={s.friends}>
        {FriendsMap}
           </div>
</div>
)
}

