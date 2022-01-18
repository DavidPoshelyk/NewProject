
const initialState = {
    user: [],
    totalCount: 1,
    page: 1,
    count: 20,
    error: null,
    isFetching:false
}



 const UsersReducer = (state:any = initialState, action:followACType|unfollowACType| dataUsersACType|pageUserACType|isFetchingUserACType) => {
    switch (action.type) {
        case "DATA-USERS": {return  {...state, user:[...state.user,...action.data.items ] , totalCount: action.data.totalCount, error: action.data.error}}
        case'FOLLOW' :{return  {...state, user:state.user.map((m:any)=> m.id === action.id? {...m, followed:true}: m ) } }
        case'UNFOLLOW' :{return {...state, user:state.user.map((m:any)=> m.id === action.id? {...m, followed:false}: m ) }}
        case "PAGE-USER": {return {...state, page: action.page}}
        case "FETCHING-USER": {return {...state, isFetching:action.isFetching }}


default: return state
    }
}

type followACType = ReturnType<typeof clickFollow >
type unfollowACType = ReturnType<typeof clickUnfollow >
type dataUsersACType = ReturnType<typeof dataUsers>
type pageUserACType = ReturnType<typeof pageUser >
type isFetchingUserACType = ReturnType<typeof isFetching >
export const clickFollow = (id: string) => {return { type: 'FOLLOW',id}as const}
export const clickUnfollow = (id: string) => {return {type: 'UNFOLLOW', id} as const}
export const dataUsers = (data: any) => {return {type: "DATA-USERS", data}as const}
export const pageUser = (page: any) => {return {type: "PAGE-USER", page}as const}
export const isFetching = (isFetching: any) => {return {type: "FETCHING-USER", isFetching}as const}



export default UsersReducer