import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {AddMessageActionCreator, UpdateNewTextMessageActionCreator } from "../../Redux/Messages-reducer";
import { withAuthRedirect } from "../hoc/withAuthHoc";
import {Messages} from "./Messages";

const mapStateToProps = (state:any) => {
    return{
        value:state.MessagesReducer.Newtextmessage
    }

}
const mapDispatchToProps = (dispatch:any) => {
    return{
        onChangeMessages: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewTextMessageActionCreator(e.currentTarget.value))
        },
        push: () => {
            dispatch(AddMessageActionCreator());
            dispatch(UpdateNewTextMessageActionCreator(''))},

    }

}

export  const  MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Messages))