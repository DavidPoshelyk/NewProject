import React from "react";
import s from './Friends.module.css'
import axios from "axios";


class Friends extends React.Component<any, any>{
    AddFriends = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.dataFriends(response.data.items)

        })

    }

render() {
    return (
        <div>
            <button onClick={() => this.AddFriends()}> add friends
            </button>
            {this.props.data.map((f: any) =>
                <div className={s.friends}>
                    <div className={s.images}>
                        <img src='https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'/>
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
                            <div>{"f.location.city"}</div>
                            <div>{"f.location.country"}</div>

                        </div>
                        <span className={s.status}>{"f.status"}</span>


                    </div>
                </div>
            )
            }
        </div>
    )

}
}
export default Friends

