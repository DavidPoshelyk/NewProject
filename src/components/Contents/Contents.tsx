import React, {ChangeEvent} from "react";
import s from './Contents.module.css'


type ContentsType = {
    Push:()=> void
    onChangePost:(e:ChangeEvent<HTMLTextAreaElement> )=>void
    value: string }

export function Contents({Push,onChangePost,value,...props}: ContentsType) {

    return <div>
        <div className={s.input}>
            <h1> New Post</h1>
            <textarea onChange={onChangePost} value={value}/>
            <button onClick={Push}> push</button>
        </div>
    </div>
}








