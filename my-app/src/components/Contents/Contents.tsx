import React from "react";
import s from './Contents.module.css'
import images from '../../images/santa-katarina-braziliya (1920x1080).jpg'
import {MyInfo} from "./MyInfo.";

export function Contents() {
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


type TypeDataItem = {
    item: boolean,
    like: number,
    info: string
}
let DataPosts = [
    {item: false, like: 8, info: 'vgvgvktuv'},
    {item: true, like: 1, info: 'kbibib'},
    {item: false, like: 10, info: 'jhvbyvyiv'},
    {item: true, like: 88, info: 'it kamasutra'},
    {item: false, like: 908, info: 'React Dom'},
    {item: true, like: 4, info: 'Html hvuyvivfi'},
]



const Posts: React.FC<TypeDataItem> = (props) => {
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

let DataPostsMap = DataPosts.map(i => <Posts like={i.like} item={i.item} info={i.info}/> )