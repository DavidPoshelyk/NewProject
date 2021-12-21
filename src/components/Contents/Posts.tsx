import React from "react";
import s from "./Contents.module.css";


export const Posts = (props:any) => {
    return  props.data.map((i:any) => {
        return (
            <div className={s.posts}>
                <img src='https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg'/>
                <div> My New Posts
                    <li> {i.info}</li>
                </div>
                <div className={s.textPosts}><b>Like</b> {i.like}
                    <div><input type="checkbox" checked={i.item}/></div>
                </div>
            </div>
        )
    })

}