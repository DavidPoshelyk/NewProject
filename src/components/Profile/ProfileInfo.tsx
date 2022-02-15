import React, {useState} from "react";
import s from './Contents.module.css'
import userPhoto from './../../images/9082227.png'
import Ring from "../../Preloader/Ring";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo = (props: any) => {
    const [MouseEnter, setMouseEnter] = useState<boolean>(false)
    const [valueAccordion, setValueAccordion] = useState<boolean>(false)

    return (
        <div>
            {props.isFetching ? <div className={s.preloader}><Ring/></div> :
                <div className={s.profileInfo}>
                    <img className={s.userPhoto} src={props.photos.large === null ? userPhoto : props.photos.large}/>
                    <div className={s.infoUser}>
                        <div className={s.fullNameUser}>{props.fullName}</div>
                       <b><ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/></b>
                        <div className={s.statusUser}>{props.lookingForAJobDescription}</div>
                        <div onMouseLeave={() => setMouseEnter(false)}
                             onMouseEnter={() => setMouseEnter(true)}
                             onClick={() => setValueAccordion(!valueAccordion)}
                             style={{backgroundColor: MouseEnter ? "#5181b8" : ''}}
                             className={s.spanInfo}>
                            {valueAccordion ? 'Скрыть подробную информацию' : 'Показать подробную информацию'}
                        </div>
                        {valueAccordion &&
                        <div className={s.accordion}>
                            {/*<ul> Желание: {props.contacts.lookingForAJobDescription}</ul>*/}
                            <ul> Github: {props.contacts.github}</ul>
                            <ul> Website: {props.contacts.website}</ul>
                            <ul> Facebook: {props.contacts.facebook}</ul>
                            <ul> Vk: {props.contacts.vk}</ul>
                        </div>
                        }
                    </div>
                </div>}

                </div>
                )
            }
