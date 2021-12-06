import React, {useRef} from "react";
import s from './Contents.module.css'
import {MyInfo} from "./MyInfo.";
import {Posts} from "./Posts";
import {_stateType, AddPostActionCreator, UpdateNewTextPostActionCreator} from "../State/state";



type Contents = {
    state:_stateType
    dispatch:Function
}



export function Contents({dispatch,state,...props}: Contents) {
    let DataPostsMap = state.DataPosts.map(i => <Posts like={i.like} item={i.item} info={i.info}/>);

    let newPost = useRef<HTMLTextAreaElement>(null);

    let Push = () => {
        dispatch(AddPostActionCreator());
        dispatch(UpdateNewTextPostActionCreator(''))
    }
   let onChangePost = () => {
     let text = newPost.current?.value;
     if(text)
         dispatch(UpdateNewTextPostActionCreator(text))

 }

    return <div>
        <MyInfo/>
        <div className={s.input}>
            <h1> New Post</h1>
            <textarea onChange={onChangePost} ref={newPost} value={state.Newtextpost}/>
            <button onClick={Push}> push</button>
        </div>
        {DataPostsMap}
    </div>
}








