import React from 'react';



const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const DATA_PROFILE = 'DATA_PROFILE'

let initialState = {
    aboutMe:'',
    contacts:{
        facebook: '',
        github: '',
        instagram: '',
        mainLink: '',
        twitter: '',
        vk: '',
        website: '',
        youtube: '',
    },
    fullName:'',
    lookingForAJobDescription:'',
    photos:{
        large:'',
        small:'',

    },
    // dataMyPosts:[],
    // Newtextpost:''
}

const ProfileReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let New = {item: true, like: 0, info: state.Newtextpost}
            return {...state, data:[New,...state.data]}
        case UPDATE_NEW_TEXT_POST:
            return {...state, Newtextpost:action.NewPost}
        case DATA_PROFILE: {
            console.log(action.data)
            return action.data
        }
        default: return  state
    }

}

export default ProfileReducer

export const AddPostActionCreator = () => ({type:ADD_POST})
export const UpdateNewTextPostActionCreator = (text:any)=>({type: UPDATE_NEW_TEXT_POST, NewPost: text})
export const dataProfile = (data:any)=>({type: DATA_PROFILE, data})