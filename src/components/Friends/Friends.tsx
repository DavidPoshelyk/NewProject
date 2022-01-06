import React from "react";
import s from './Friends.module.css'
import axios from "axios";
import  userImages from  "./../../images/9082227.png"


class Friends extends React.Component<any, any>{


   componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
           console.log(response.data)
           this.props.dataFriends(response.data)})
   }
   page(m:number){
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${m}&count=${this.props.data.count}`).then(response => {
           this.props.dataFriends(response.data)});
            console.log(m);
           this.props.dataPage(m)}



    render() {
        console.log(this.props.data.page)
        console.log(this.props.data.value)
        let a = []
        for (let i = 1; i <= this.props.data.page ; i++){
            a.push(i)
        }
        return (
        <div>

            {a.map((m, index)=> <span style={{backgroundColor:this.props.data.value === m ? "red":""}} key={index} onClick={()=> this.page(m)}>{m}</span>)}
            {this.props.data.user.map((f: any) =>
                <div className={s.friends}>
                    <div className={s.images}>
                        <img src={userImages}/>
                        <div>

                            {f.followed ? <button onClick={() => {
                                this.props.clickUnfollow(f.id)
                            }} className={s.button}>Unfollow</button> : <button onClick={() => {
                               this.props.clickFollow(f.id)
                            }} className={s.button}>Follow</button>}

                        </div>
                    </div>
                    <div className={s.info}>
                        <span className={s.fullName}>{f.name}</span>
                        <div className={s.location}>
                            {/*<div>{"f.location.city"}</div>*/}
                            {/*<div>{"f.location.country"}</div>*/}

                        </div>
                        {/*<span className={s.status}>{"f.status"}</span>*/}


                    </div>
                </div>
            )
            }
        </div>
    )

}
}
export default Friends

