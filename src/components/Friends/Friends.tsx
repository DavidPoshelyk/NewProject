import React from "react";
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";
import {followAC, unfollowAC} from "../../Redux/Friends-reducer";



export function Friends({data,clickFollow,clickUnfollow, ...props}: any) {

    let FriendsMap = data.map((f: any) =>
        <div className={s.friends}>
            <div className={s.images}>
                <img src={f.images}/>
               <div>

                   {f.followed ? <button onClick={()=>{ clickUnfollow(f.id)} } className={s.button}>Unfollow</button>:<button onClick={()=>{ clickFollow(f.id)} } className={s.button}>Follow</button>}

               </div>
            </div>
            <div className={s.info}>
            <span className={s.fullName}>{f.fullName}</span>
            <div className={s.location}>
              <div>{f.location.city}</div>
              <div>{f.location.country}</div>

            </div>
            <span className={s.status}>{f.status}</span>
            {/*<span>name</span>*/}

            </div>
        </div>

        // <div className={s.friendsO}>
        //     <img src={f.images}/>
        //     <div> <NavLink to="{f.id}"> {f.name}</NavLink> </div>
        //     <input type="checkbox"/>
        //     {f.status ? <b>Online</b> : <b>Offline</b>}
        // </div>
    )
    return (
        <div>
            {FriendsMap}
        </div>
    )
}

