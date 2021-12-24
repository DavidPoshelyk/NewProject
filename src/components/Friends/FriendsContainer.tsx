import React from "react";
import {connect} from "react-redux";
import {Friends} from "./Friends";

const mapStateToProps = (state:any) => {
    return{
        data: state.FriendsReducer
    }

}
export const FriendsContainer =  connect(mapStateToProps)(Friends)
