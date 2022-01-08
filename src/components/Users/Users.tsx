import React from "react";
import s from './Users.module.css'
import  userImages from  "./../../images/9082227.png"


 export const  Users = (props:any) => {
    return (
        <div>
            {props.data.user.map((f: any) =>
                <div className={s.friends}>
                    <div className={s.images}>
                        {f.photos.small != null ? <img src={f.photos.small}/>: <img src={userImages}/>}
                        <div>

                            {f.followed ? <button onClick={() => {
                                props.clickUnfollow(f.id)
                            }} className={s.button}>Unfollow</button> : <button onClick={() => {
                               props.clickFollow(f.id)
                            }} className={s.button}>Follow</button>}

                        </div>
                    </div>
                    <div className={s.info}>
                        <span className={s.fullName}>{f.name}</span>
                        <div className={s.location}>
                            {/*<div>{"f.location.city"}</div>*/}
                            {/*<div>{"f.location.country"}</div>*/}

                        </div>
                        {/*<span className={s.status}>{"f.status"}</span>*/}


                    </div>
                </div>
            )
            }
            <div style={{textAlign: "center"}}>
                <button style={{width:"150px", height:'50px'}}  className={s.button} onClick={()=> props.moreUser(props.data.page + 1 )}> + More Users </button>
            </div>

        </div>
    )

}


