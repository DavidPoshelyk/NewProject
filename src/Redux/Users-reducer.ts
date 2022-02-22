import {UserAPI} from "./api/UserAPI";
import {Dispatch} from "redux";
import {AppRootStateType} from "./Store";


type actionType = followACType
    | unfollowACType
    | dataUsersACType
    | pageUserACType
    | isFetchingUserACType
    | followProgressACType
    | isSubscribersType

export type userType = {
    name: string,
    id: string,
    photos: {
        small: null | string,
        large: null | string,
    },
    status: null | string,
    followed: boolean,
}

const initialState = {
    user: [] as Array<userType>,
    totalCount: null,
    page: 1,
    count: 20,
    error: null,
    isFetching: false,
    followProgress: [],
    isSubscribers: false
}
 export type UsersReducerType = {
    user: Array<any>,
    totalCount: null | number,
    page: number,
    count: number,
    error: null | string,
    isFetching: boolean,
    followProgress: Array<string>,
    isSubscribers: boolean

}


const UsersReducer = (state: UsersReducerType = initialState, action: actionType) => {
    switch (action.type) {
        case "DATA-USERS": {
            return {...state, user: [...action.data.items], totalCount: action.data.totalCount}
        }
        case'FOLLOW' : {
            return {
                ...state,
                followProgress: [...state.followProgress].filter(f => f !== action.id),
                user: state.user.map((m: userType) => m.id === action.id ? {...m, followed: true} : m)
            }
        }
        case'UNFOLLOW' : {
            return {
                ...state,
                followProgress: [...state.followProgress].filter(f => f !== action.id),
                user: state.user.map((m: userType) => m.id === action.id ? {...m, followed: false} : m)
            }
        }
        case "PAGE-USER": {
            return {...state, page: action.page}
        }
        case "FETCHING-USER": {
            return {...state, isFetching: action.isFetching}
        }
        case "FOLLOW-PROGRESS": {
            return {...state, followProgress: [...state.followProgress, action.id]}
        }
        case "IS-SUBCRIBERS": {
            return {...state, isSubscribers: action.isFriend}
        }


        default:
            return state
    }
}

type followACType = ReturnType<typeof clickFollow>
type unfollowACType = ReturnType<typeof clickUnfollow>
type dataUsersACType = ReturnType<typeof dataUsers>
type pageUserACType = ReturnType<typeof pageUser>
type isFetchingUserACType = ReturnType<typeof isFetching>
type followProgressACType = ReturnType<typeof followProgress>
type isSubscribersType = ReturnType<typeof isSubscribers>

export const clickFollow = (id: string) => {
    return {type: 'FOLLOW', id} as const
}
export const clickUnfollow = (id: string) => {
    return {type: 'UNFOLLOW', id} as const
}
export const dataUsers = (data: any) => {
    return {type: "DATA-USERS", data} as const
}
export const pageUser = (page: number) => {
    return {type: "PAGE-USER", page} as const
}
export const isFetching = (isFetching: boolean) => {
    return {type: "FETCHING-USER", isFetching} as const
}
export const followProgress = (id: string) => {
    return {type: 'FOLLOW-PROGRESS', id} as const
}
export const isSubscribers = (isFriend: boolean) => {
    return {type: 'IS-SUBCRIBERS', isFriend} as const
}


export const clickFollowThunk = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(followProgress(id))
        UserAPI.unfollowUsers(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(clickUnfollow(id))
            }
        })
    }
}
export const clickUnfollowThunk = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(followProgress(id))
        UserAPI.followUsers(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(clickFollow(id))
            }
        })
    }
}
export const getUserThunk = () => {
    return (dispatch: Dispatch) => {
        dispatch(isFetching(true))
        UserAPI.getUsers().then(response => {
            dispatch(dataUsers(response.data))
            dispatch(isFetching(false))
            dispatch(pageUser(1))
        })
    }
}
export const paginationUsers = (page: number) => {
    return (dispatch: any, getState: () => AppRootStateType) => {
        let isSubscribers = getState().UsersReducer.isSubscribers
        UserAPI.moreUsers(page, isSubscribers).then(response => {
            dispatch(pageUser(page))
            dispatch(dataUsers(response.data))
        })
    }

}
export const getSubscribers = (isFriend: boolean) => {
    console.log(isFriend)
    return (dispatch: Dispatch) => {
        UserAPI.getSubscribers(isFriend).then(response => {
                console.log(response.data.items)
                dispatch(dataUsers(response.data))
                dispatch(isSubscribers(isFriend))
                dispatch(pageUser(1))
            }
        )

    }
}


export default UsersReducer