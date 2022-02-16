import React, {useState} from 'react';
import s from './Profile_Bloc.module.css'
import OutlinedButtons from "../../Bloc_Material_Ui/CustomButton/CustomButton";
import Divider from "@mui/material/Divider";
import {ProfileAPI} from "../../Redux/api/ProfileAPI";

const ProfileBloc = (props: any) => {
    const[file, setFile]= useState<any>()

    return (
        <div>
            <div className={s.ProfileBloc}>
                <div className={s.photoBloc}>
                    <div style={{padding: '10px'}}>
                        <img className={s.sizePhoto}
                             src={props.photos.large === null ? 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' : props.photos.large}/>
                    </div>
                    <div className={s.photoRefactor}>
                        <OutlinedButtons minWidth='180px' name='Refactor'/>
                    </div>
                </div>
                <div className={s.infoBloc}>
                    <div className={s.name}>
                        <h1>{props.fullName}</h1>
                        <span>{props.status}</span>
                    </div>
                    <Divider/>
                    <div className={s.info}>
                        <OutlinedButtons Width='100%' name='Show detailed information'/>
                    </div>
                    <Divider/>
                    <div>
                        <input type='file' onChange={(e)=>{
                            if(e.target.files) {setFile(e.target.files[0])
                            console.log(e.target.files[0])}
                        }}/>
                        <button onClick={()=>{
                            console.log(file)
                            ProfileAPI.postPhoto(file).then(res=>{
                                console.log(res)
                            })
                        }}>add</button>

                </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBloc;