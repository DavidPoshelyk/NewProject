import React from "react";
import {connect} from "react-redux";
import {dataFriendsAC, followAC, pageUserAC, countUserAC, unfollowAC} from "../../Redux/Friends-reducer";
import Friends from "./Friends";


const mapStateToProps = (state:any) => {
    return{
        data: state.FriendsReducer
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return{
        clickFollow:(id:string)=>{dispatch(followAC(id))} ,
        clickUnfollow:(id:string)=> {dispatch(unfollowAC(id))},
        dataFriends:(array: any)=> {dispatch(dataFriendsAC(array))},
        countUsers:(count:number)=> {dispatch(countUserAC(count))},
        pageUser:(page: number)=> {dispatch(pageUserAC(page))}


    }
}
export const FriendsContainer =  connect(mapStateToProps,mapDispatchToProps)(Friends)
