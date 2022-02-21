import React, {useState} from 'react';
import s from './Profile_Bloc.module.css'
import OutlinedButtons from "../../Bloc_Material_Ui/CustomButton/CustomButton";
import Divider from "@mui/material/Divider";
import {ProfileStatus} from "./ProfileStatus";

const ProfileBloc = (props: any) => {
    console.log(props)
    const [onfile, setOnFile] = useState<boolean>(false)
    const [filePhoto, setFilePhoto] = useState<any>()
    const [isBlocInfoUser,setBlocInfoUser]= useState<boolean>(false)
    const onClickRefactor = () => {
        setOnFile((state: boolean) => {
            if (!state) {
                return true
            } else {
                if (filePhoto) {
                    props.postPhotoProfile(filePhoto)
                }
                return false

            }
        })
    }

    return (
        <div>
            <div className={s.ProfileBloc}>
                <div className={s.photoBloc}>
                    <div style={{padding: '10px'}}>
                        <img className={s.sizePhoto}
                             src={props.photos.large === null ? 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' : props.photos.large}/>
                    </div>
                    <div className={s.photoRefactor}>
                        <OutlinedButtons onClick={onClickRefactor} minWidth='180px' name='Refactor'/>
                        {onfile && <input onChange={(e) => {
                            e.target.files && setFilePhoto(e.target.files[0])
                        }} type='file'/>}
                    </div>
                </div>
                <div className={s.infoBloc}>
                    <div className={s.name}>
                        <h1>{props.fullName}</h1>
                        <ProfileStatus updateStatusThunk={props.updateStatusThunk} status={props.status}/>
                        {/*<span>{props.status}</span>*/}
                    </div>
                    <Divider/>
                    <div className={s.info}>
                        <OutlinedButtons onClick={()=>{setBlocInfoUser(state=> !state)}} width='100%' name='Show detailed information'/>
                    </div>
                    {isBlocInfoUser && <div className={s.blocInfoUser}>
                        <span>Facebook: {props.contacts.facebook?props.data.contacts.facebook:'----'}</span>
                        <span>Git: {props.contacts.git?props.data.contacts.git:'----'}</span>
                        <span>Instagram: {props.contacts.instagram?props.data.contacts.instagram:'----'}</span>
                        <span>Vk: {props.contacts.vk?props.data.contacts.vk:'----'}</span>
                       </div>}
                    <Divider/>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBloc;