import React from "react";
import s from "./Contents.module.css";
import {TypePosts} from "../State/state";
// import {TypePosts} from "../State/state";



// type TypePostsData = {
//     info: TypePosts
//     like: number
//     item: boolean
// }
export const Posts = (props:any) => {
    return (<div className={s.posts}>
            <img src='https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg'/>
            <div> My New Posts
                <li> {props.info}</li>
            </div>
            <div className={s.textPosts}><b>Like</b> {props.like}
                <div><input type="checkbox" checked={props.item}/></div>
            </div>
        </div>
    )
}