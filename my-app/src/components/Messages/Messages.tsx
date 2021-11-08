import React from "react";
import s from './Messeges.module.css'
import {NavLink} from "react-router-dom";



export function Messages() {
    return (
        <div className={s.messages}>

           <div>
               <div className={s.user}>
                <NavLink activeClassName={s.active} to='/messages'> Vitalik</NavLink>
            </div>
            <div className={s.user}>
                <NavLink activeClassName={s.active} to='/messages'> Pavel</NavLink>
            </div>
            <div className={s.user}>
                <NavLink activeClassName={s.active} to={'/messages'}> Kirill</NavLink>
            </div>
           </div>
            <div className={s.dialogs}>
                 <div> hi</div>
                <div> Yo</div>
                <input/>
                <button>Push</button>
            </div>
        </div>


    )
}

// function User(prps: any ) {
//     let DialogsData = [
//         {id: 0, name: 'Dima'},
//         {id: 1, name: 'Vitalik'},
//         {id: 2, name: 'Pavel'},
//         {id: 3, name: 'Kirill'}
//     ]
//    return (
//      <div className={s.messagesUser}>
//       <div className={s.user}>
//         <NavLink activeClassName={s.active} to={DialogsData[0].id}> {DialogsData[0].name}</NavLink>
//     </div>
//     <div className={s.user}>
//         <NavLink activeClassName={s.active} to='/messages'> Vitalik</NavLink>
//     </div>
//     <div className={s.user}>
//         <NavLink activeClassName={s.active} to='/messages'> Pavel</NavLink>
//     </div>
//
//     <div className={s.user}>
//         <NavLink activeClassName={s.active} to={'/messages'}> Kirill</NavLink>
//     </div>
//      </div>
//    )
// }
