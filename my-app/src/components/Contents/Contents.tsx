import React from "react";
import s from './Contents.module.css'
import images from '../../images/santa-katarina-braziliya (1920x1080).jpg'

export function Contents() {
    return (<div>
            <img className={s.imagesFon}
                 src={images}/>
            <div className={s.posts}>

                    <img src='https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg'/>
                    <div className={s.text}>
                        <li> my info</li>
                        <li> my age</li>
                        <li> the weight</li>
                        <li> position</li>
                    </div>
                </div>
            <div>
                <div>My Posts</div>
                <input type='text'/>
                <button> push </button>
                <Posts value={9} date={'14.02.2289'}/>
                <Posts value={3} date={'14.02.2289'} />
                <Posts value={77} date={'14.02.2289'}/>
                <Posts value={89} date={'14.02.2289'}/>
    </div>
</div>
    )
}


function Posts(props: any) {
    return (<div className={s.posts}>
            <img src='https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg'/>
            <div> React Dom
                <li> Rect dom</li>
                <li> Rect dom</li>
                <li> Rect dom</li>
            </div>

            <div className={s.textPosts}><b>Like</b> {props.value} <div>{props.date} </div></div>


        </div>
    )
}