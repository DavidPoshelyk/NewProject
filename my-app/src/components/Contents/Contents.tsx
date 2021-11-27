import React, {useRef} from "react";
import s from './Contents.module.css'
import {MyInfo} from "./MyInfo.";
import {Posts} from "./Posts";



type Contents = {
    state:any
    dispatch:any
}



export function Contents(props: Contents) {
    let DataPostsMap = props.state.DataPosts.map((i:any) => <Posts like={i.like} item={i.item} info={i.info}/>);

    let newPost = useRef<HTMLTextAreaElement>(null);

    let Push = () => {
        props.dispatch({type:'ADD-POST'});
        props.dispatch({type:'UPDATE-NEW-TEXT-POST', NewPost:''})
    }
   let onChangePost = () => {
     let text = newPost.current?.value;
        props.dispatch({type:'UPDATE-NEW-TEXT-POST', NewPost:text})

 }

    return <div>
        <MyInfo/>
        <div className={s.input}>
            <h1> New Post</h1>
            <textarea onChange={onChangePost} ref={newPost} value={props.state.Newtextpost}/>
            <button onClick={Push}> push</button>
        </div>
        {DataPostsMap}
    </div>
}








