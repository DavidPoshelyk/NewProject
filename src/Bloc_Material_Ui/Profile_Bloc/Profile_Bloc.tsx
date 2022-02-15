import React from 'react';
import s from './Profile_Bloc.module.css'
import OutlinedButtons from "../../component/CustomButton/CustomButton";
import Divider from "@mui/material/Divider";

const ProfileBloc = () => {
    return (
        <div>
        <div className={s.ProfileBloc}>
            <div className={s.photoBloc}>
                <div  style={{padding:'10px'}}>
                    <img className={s.sizePhoto}  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                </div>
                <div className={s.photoRefactor}>
                    <OutlinedButtons minWidth='180px'  name='Refactor'/>
                </div>
            </div>
            <div className={s.infoBloc}>
                <div className={s.name}>
                  <h1>David Poshelyuk</h1>
                </div>
                <Divider/>
                <div className={s.info}>
                    <OutlinedButtons minWidth='460px'  name='Show detailed information'/>
                </div>
                <Divider/>
            </div>
        </div>


        </div>
    );
};

export default ProfileBloc;