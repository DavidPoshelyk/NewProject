import React from "react";
import s from './Friends.module.css'
import axios from "axios";
import  userImages from  "./../../images/9082227.png"


class Friends extends React.Component<any, any>{


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            console.log("componentDidMount")
            this.props.dataFriends(response.data)
        })

    }

    moreUser() {
        let count
        let page
        if (this.props.data.count  <= 80){
            this.props.countUsers(this.props.data.count + 20)
            count = this.props.data.count + 20
        } else {
            this.props.countUsers(20)
            page = this.props.data.page + 1
            this.props.pageUser(page)
            console.log(page)
            console.log(page)}
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`).then(response => {
            console.log("moreUser")
            this.props.dataFriends(response.data)
        })
        console.log(this.props.data.count)
        console.log(this.props.data.page)
            // this.props.countUsers(this.props.data.count + 10)



    }




    render() {

        return (
        <div>

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
            <div style={{textAlign: "center"}}>
                <button style={{width:"150px", height:'50px'}}  className={s.button} onClick={()=>this.moreUser()}> + More Users </button>
            </div>

        </div>
    )

}
}
export default Friends

