import React from "react";
import s from './Contents.module.css'
import {MyInfo} from "./MyInfo.";
import {Posts} from "./Posts";
import {TypePosts} from "../State/state";

type Contents = {
    posts: Array<TypePosts>
}


export function Contents(props:Contents) {
    let DataPostsMap = props.posts.map(i => <Posts like={i.like} item={i.item} info={i.info}/> )

    return (<div>
            <MyInfo/>
            <div>

                <div className={s.input}>
                    <h1> New Post</h1>
                    <input type='text'/>
                    <button> push</button>
                </div>
                {DataPostsMap}
            </div>
        </div>

    )
}








