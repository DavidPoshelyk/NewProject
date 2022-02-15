import {UserAPI} from "../api/UserAPI";
import {Dispatch} from "redux";

const initialState = {
    user: [],
    totalCount: null,
    page: 1,
    count: 20,
    error: null,
    isFetching:false,
    followProgress: [],
    isSubscribers:false
}



 const UsersReducer = (state:any = initialState, action:followACType|unfollowACType| dataUsersACType|pageUserACType|isFetchingUserACType|followProgressACType|isSubscribersType) => {
    switch (action.type) {
        case "DATA-USERS": {return  {...state, user:[...action.data.items ] , totalCount: action.data.totalCount, error: action.data.error}}
        case'FOLLOW' :{return  {...state, followProgress:[...state.followProgress].filter(f=> f !== action.id), user:state.user.map((m:any)=> m.id === action.id? {...m, followed:true}: m ) } }
        case'UNFOLLOW' :{return {...state, followProgress:[...state.followProgress].filter(f=> f !== action.id),  user:state.user.map((m:any)=> m.id === action.id? {...m, followed:false}: m ) }}
        case "PAGE-USER": {return {...state, page: action.page}}
        case "FETCHING-USER": {return {...state, isFetching:action.isFetching }}
        case "FOLLOW-PROGRESS": {return {...state, followProgress:[...state.followProgress, action.id]}}
        case "IS-SUBCRIBERS": {return {...state, isSubscribers:action.isFriend}}


default: return state
    }
}

type followACType = ReturnType<typeof clickFollow >
type unfollowACType = ReturnType<typeof clickUnfollow >
type dataUsersACType = ReturnType<typeof dataUsers>
type pageUserACType = ReturnType<typeof pageUser >
type isFetchingUserACType = ReturnType<typeof isFetching >
type followProgressACType = ReturnType<typeof followProgress >
type isSubscribersType = ReturnType<typeof isSubscribers >

export const clickFollow = (id: string) => {return { type: 'FOLLOW',id}as const}
export const clickUnfollow = (id: string) => {return {type: 'UNFOLLOW', id} as const}
export const dataUsers = (data: any) => {return {type: "DATA-USERS", data}as const}
export const pageUser = (page: any) => {return {type: "PAGE-USER", page}as const}
export const isFetching = (isFetching: any) => {return {type: "FETCHING-USER", isFetching}as const}
export const followProgress = (id:string)=> {return {type:'FOLLOW-PROGRESS', id} as const}
export const isSubscribers = (isFriend:boolean) => {return {type: 'IS-SUBCRIBERS', isFriend} as const}


export const clickFollowThunk = (id:string) => {
    return (dispatch:any) => {
        dispatch(followProgress(id))
        UserAPI.UnfollowUsers(id).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(clickUnfollow(id))
            }
        })
    }
}
export const clickUnfollowThunk = (id:string) => {
    return (dispatch:any) => {
        dispatch(followProgress(id))
        console.log(id)
        UserAPI.FollowUsers(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(clickFollow(id))
            }
        })
    }
}
export const getUserThunk = () => {
    return (dispatch:any) => {
        dispatch(isFetching(true))
        UserAPI.GetUsers().then(data => {
            dispatch(dataUsers(data))
            dispatch(isFetching(false))
            dispatch(pageUser(1))
        })
    }
}
export  const paginationUsers = (page: number) => {
    return (dispatch:any, getState:any) => {
      let isSubscribers = getState().UsersReducer.isSubscribers
        UserAPI.MoreUsers(page,isSubscribers).then(data=>{
            dispatch(pageUser(page))
            dispatch(dataUsers(data))
        })
    }

}
export const getSubscribers = (isFriend:boolean) =>{
    console.log(isFriend)
    return (dispatch:Dispatch)=>{
        UserAPI.GetSubscribers(isFriend).then( response=>{
            console.log(response.data.items)
            dispatch(dataUsers(response.data))
            dispatch(isSubscribers(isFriend))
            dispatch(pageUser(1))
            }
        )

    }
}


export default UsersReducer