import s from "./Contents.module.css";
import images from "../../images/santa-katarina-braziliya (1920x1080).jpg";
import React from "react";

type TypeMyInfo = {
    state: any
}


export const MyInfo = ({state,...props}:TypeMyInfo) => {
    return <div>
        <img className={s.imagesFon} src={images}/>
        <div className={s.profile}>
            <div>
            <img src='https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg'/>
            </div>

            <div className={s.text}>

                <li> my age {state.GeneralSettings.myAge.data}</li>
                <li> married {state.GeneralSettings.married.data}</li>
                <li> education {state.GeneralSettings.education.data}</li>
                <li> my Email {state.GeneralSettings.Email.data}</li>

        </div>
    </div>
    </div>
}
