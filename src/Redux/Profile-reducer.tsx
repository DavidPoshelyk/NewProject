import React from 'react';
import {ProfileAPI} from "../api/ProfileAPI";
const DATA_PROFILE = 'DATA-PROFILE'
const IS_FETCHING = 'IS-FETCHING'
const SET_STATUS = 'SET-STATUS'
//const UPDATE_STATUS = 'UPDATE-STATUS'


type initialStateType ={
    aboutMe:string,
    contacts:{
        facebook: string,
        github: string,
        instagram: string,
        mainLink: string,
        twitter: string,
        vk: string,
        website: string,
        youtube: string,
    },
    fullName:string,
    lookingForAJobDescription:string,
    photos:{
        large:string,
        small:string,

    },
    isFetching:boolean,
    status:string

}

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
    status:''
    // Newtextpost:''
}

 export  const ProfileReducer = (state:initialStateType = initialState, action:comboTypeAction) => {
    switch (action.type) {
        case DATA_PROFILE: {
            return {...state, ...action.data}
        }
        case IS_FETCHING: {
            return {...state,isFetching:action.isFetching }
        }
        case SET_STATUS:{
            return {...state, status:action.status}
        }
        default: return  state
    }

}


type comboTypeAction = setStatusType|isFetchingType|dataProfileType
type setStatusType = ReturnType<typeof setStatus>
type isFetchingType = ReturnType<typeof isFetching>
type dataProfileType = ReturnType<typeof dataProfile>
const dataProfile = (data:any)=>({type: DATA_PROFILE, data} as const)
const isFetching = (isFetching:boolean)=>({type: IS_FETCHING, isFetching} as const)
const setStatus = (status:string) => ({type:SET_STATUS, status} as const)



export const  profilePage = (userId:number)=> {
    return (dispatch:any)=>{
        dispatch(isFetching(true))
        ProfileAPI.profilePage(userId).then(response => {
            dispatch(isFetching(false))
           dispatch(dataProfile(response.data))
        })
    }
}
export const  getStatusThunk = (userId:string)=> {
    return (dispatch:any)=>{
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const  updateStatusThunk = (status:string)=> {
    return (dispatch:any)=>{
        ProfileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }

        })
    }
}
export  default  ProfileReducer