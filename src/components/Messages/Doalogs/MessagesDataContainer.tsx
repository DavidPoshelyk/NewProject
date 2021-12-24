import React from "react";
import {connect} from "react-redux";
import {MessagesData} from "./MessagesData";

const mapStateToProps = (state:any) => {
    return{
        data: state.MessagesReducer.data
    }

}
export const  MessagesDataContainer = connect(mapStateToProps)(MessagesData)