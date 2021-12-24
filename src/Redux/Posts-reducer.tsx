import React from 'react';
import {dataPostsType} from "../components/Store/Store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'

let initialState = { data:[{item: true, like: 4, info: 'Html hvuyvivfi'}], Newtextpost:''}

const PostsReducer = (state:dataPostsType = initialState, action:any): dataPostsType => {
    switch (action.type) {
        case ADD_POST:
            let New = {item: true, like: 0, info: state.Newtextpost}
            return {...state, data:[New,...state.data]}
        case UPDATE_NEW_TEXT_POST:
            return {...state, Newtextpost:action.NewPost}
        default: return  state
    }

}

export default PostsReducer

export const AddPostActionCreator = () => ({type:ADD_POST})
export const UpdateNewTextPostActionCreator = (text:any)=>({type: UPDATE_NEW_TEXT_POST, NewPost: text})