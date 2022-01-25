import React from 'react';
import {ProfileAPI} from "../api/ProfileAPI";



const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const DATA_PROFILE = 'DATA_PROFILE'
const IS_FETCHING = 'IS-FETCHING'

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
    isFetching:false,
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
            return action.data
        }
        case IS_FETCHING: {
            return {...state,isFetching:action.isFetching }
        }
        default: return  state
    }

}

export default ProfileReducer

export const AddPostActionCreator = () => ({type:ADD_POST})
export const UpdateNewTextPostActionCreator = (text:any)=>({type: UPDATE_NEW_TEXT_POST, NewPost: text})
const dataProfile = (data:any)=>({type: DATA_PROFILE, data})
const isFetchingAC = (isFetching:any)=>({type: IS_FETCHING, isFetching})


export const  profilePage = (userId:number)=> {
    return (dispatch:any)=>{
        dispatch(isFetchingAC(true))
        ProfileAPI.profilePage(userId).then(response => {
            dispatch(isFetchingAC(false))
           dispatch(dataProfile(response.data))
        })
    }
}