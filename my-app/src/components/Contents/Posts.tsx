import React from "react";
import s from "./Contents.module.css";


  type TypeDataItem = {
    info: string
    like:string
    item: boolean
}
export  const Posts: React.FC<TypeDataItem> = (props) => {
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