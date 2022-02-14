import React from 'react';
import  s from './User.module.css'
import {Button} from "@mui/material";

const User = () => {
    return (
        <div className={s.user}>
            <div className={s.userPhoto}>
                <img className={s.sizePhoto} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZCceylUAHC-cSKJv7Wb8okOaJaa5SGny-w&usqp=CAU'/>
            </div>
            <div className={s.userInfo}>
                <div>
                    <span className={s.userName}>
                    David Poshelyuk
                </span>
                    <span className={s.userName}>
                   Junior
                </span>

                </div>
                <div className={s.userBotton}>
                    <Button color='success'>Follow</Button>
                    <Button color='secondary'>Unfollow</Button>
                </div>

            </div>


        </div>
    );
};

export default User;