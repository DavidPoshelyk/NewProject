import React from "react";
import {connect} from "react-redux";
import {DialogsData} from "./DialogsData";


const mapStateToProps = (state:any) => {
    return{
        data:state.DialogsReducer
    }
}


export  const DialogsContainer = connect(mapStateToProps)(DialogsData)