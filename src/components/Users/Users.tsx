import React from "react";
import s from './Users.module.css'
import userImages from './../../images/9082227.png'
import Ring from "../../Preloader/Ring";
import { NavLink } from "react-router-dom";


export const Users = (props: any) => {

    const users = props.data.user.map((f: any) =>
        <div className={s.friends}>

            <div className={s.images}>
                <NavLink to={'/profile/'+ f.id}>
                {f.photos.small != null ?
                    <img src={f.photos.small}/>
                    :
                    <img src={userImages}/>}
                </NavLink>
                <div>

                    {f.followed ? <button onClick={() => {
                        props.clickUnfollow(f.id)
                    }} className={s.button}>Unfollow</button> : <button onClick={() => {
                        props.clickFollow(f.id)
                    }} className={s.button}>Follow</button>}

                </div>
            </div>
            <div className={s.info}>
                <span className={s.fullName}>Name: {f.name}</span>
                <div className={s.location}>
                    {/*<div>{"f.location.city"}</div>*/}
                    {/*<div>{"f.location.country"}</div>*/}

                </div>
                <span className={s.status}>Status: {f.status}</span>


            </div>
        </div>
    )


    return (
        <div>
            {
                props.data.isFetching
                    ?
                    <div className={s.preloader}><Ring/></div>
                    :
                    <div>
                        {users}
                        <div style={{textAlign: "center"}}>
                            <button style={{width: "150px", height: '50px'}} className={s.button}
                                    onClick={() => props.moreUser(props.data.page + 1)}> + More Users
                            </button>
                        </div>
                    </div>
            }
        </div>
    )

}


