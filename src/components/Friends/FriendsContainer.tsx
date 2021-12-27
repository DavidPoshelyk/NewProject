import React from "react";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {followAC, unfollowAC} from "../../Redux/Friends-reducer";


const mapStateToProps = (state:any) => {
    return{
        data: state.FriendsReducer
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return{
        clickFollow:(id:string)=>{
            dispatch(followAC(id))
        } ,
        clickUnfollow:(id:string)=> {
            dispatch(unfollowAC(id))
            console.log(id)
        }


    }
}
export const FriendsContainer =  connect(mapStateToProps,mapDispatchToProps)(Friends)
