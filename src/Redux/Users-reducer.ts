import {UserAPI} from "../api/UserAPI";

const initialState = {
    user: [],
    totalCount: null,
    page: 1,
    count: 20,
    error: null,
    isFetching:false,
    followProgress: []
}



 const UsersReducer = (state:any = initialState, action:followACType|unfollowACType| dataUsersACType|pageUserACType|isFetchingUserACType|followProgressACType) => {
    switch (action.type) {
        case "DATA-USERS": {return  {...state, user:[...action.data.items ] , totalCount: action.data.totalCount, error: action.data.error}}
        case'FOLLOW' :{return  {...state, followProgress:[...state.followProgress].filter(f=> f !== action.id), user:state.user.map((m:any)=> m.id === action.id? {...m, followed:true}: m ) } }
        case'UNFOLLOW' :{return {...state, followProgress:[...state.followProgress].filter(f=> f !== action.id),  user:state.user.map((m:any)=> m.id === action.id? {...m, followed:false}: m ) }}
        case "PAGE-USER": {return {...state, page: action.page}}
        case "FETCHING-USER": {return {...state, isFetching:action.isFetching }}
        case "FOLLOW-PROGRESS": {return {...state, followProgress:[...state.followProgress, action.id]}}


default: return state
    }
}

type followACType = ReturnType<typeof clickFollow >
type unfollowACType = ReturnType<typeof clickUnfollow >
type dataUsersACType = ReturnType<typeof dataUsers>
type pageUserACType = ReturnType<typeof pageUser >
type isFetchingUserACType = ReturnType<typeof isFetching >
type followProgressACType = ReturnType<typeof followProgress >

export const clickFollow = (id: string) => {return { type: 'FOLLOW',id}as const}
export const clickUnfollow = (id: string) => {return {type: 'UNFOLLOW', id} as const}
export const dataUsers = (data: any) => {return {type: "DATA-USERS", data}as const}
export const pageUser = (page: any) => {return {type: "PAGE-USER", page}as const}
export const isFetching = (isFetching: any) => {return {type: "FETCHING-USER", isFetching}as const}
export const followProgress = (id:string)=> {return {type:'FOLLOW-PROGRESS', id} as const}

export const clickFollowThunk = (id:string) => {
    return (dispatch:any) => {
        dispatch(followProgress(id))
        UserAPI.UnfollowUsers(id).then(code => {
            if (code === 0) {
                dispatch(clickUnfollow(id))
            }
        })
    }
}
export const clickUnfollowThunk = (id:string) => {
    return (dispatch:any) => {
        dispatch(followProgress(id))
        UserAPI.FollowUsers(id).then(code => {
            if (code === 0) {
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
        })
    }
}
export  const paginationUsers = (page: number) => {
    return (dispatch:any) => {
        // this.props.pageUser(page)
        UserAPI.MoreUsers(page).then(data=>{
            dispatch(dataUsers(data))
        })
    }

}


export default UsersReducer