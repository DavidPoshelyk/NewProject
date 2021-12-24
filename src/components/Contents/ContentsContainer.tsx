import React, {ChangeEvent} from "react";
import {AddPostActionCreator, UpdateNewTextPostActionCreator} from "../../Redux/Posts-reducer";
import {Contents} from "./Contents";
import {connect} from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        value: state.PostsReducer.Newtextpost
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        Push: () => {
            dispatch(AddPostActionCreator())
            dispatch(UpdateNewTextPostActionCreator(''))
        },
        onChangePost:(e: ChangeEvent<HTMLTextAreaElement>)=>{
            dispatch(UpdateNewTextPostActionCreator(e.currentTarget.value))
        }
    }

}

 export const ContentsContainer = connect(mapStateToProps,mapDispatchToProps)(Contents)

  






