import React from 'react';
import s from './User.module.css'
import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";

const User = (props: any) => {
    console.log(props)
    return (
        <>
            <div className={s.user}>
                <div className={s.userPhoto}>
                    {props.photos.small !== null ? <img className={s.sizePhoto} src={props.photos.small}/> :
                        <img className={s.sizePhoto}
                             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZCceylUAHC-cSKJv7Wb8okOaJaa5SGny-w&usqp=CAU'/>}
                </div>
                <div className={s.userInfo}>
                    <div>
                    <span className={s.userName}>
                   {props.name}
                </span>
                        <span className={s.userName}>
                   {props.status}
                </span>
                    </div>
                    <div className={s.userBotton}>
                        {props.followed ?
                            <Button
                                disabled={props.followProgress.some((s: number) => s === props.id)}
                                onClick={() => {
                                    console.log(props.id)
                                    props.clickFollowThunk(props.id)

                                }} color='secondary'>Unfollow</Button>
                            :
                            <Button
                                disabled={props.followProgress.some((s: number) => s === props.id)}
                                onClick={() => {
                                    console.log(props.id)
                                    props.clickUnfollowThunk(props.id)
                                }
                                } color='success'>Follow</Button>}
                    </div>
                </div>
            </div>
            <Divider/>
        </>
    );
};

export default User;