
const initialState = {
    user: [],
    totalCount: 1,
    page: 1,
    count: 20,
    error: null
}



 const UsersReducer = (state:any = initialState, action:followACType|unfollowACType| dataUsersACType|pageUserACType) => {
    switch (action.type) {
        case "DATA-USERS": {return  {...state, user: state.user.concat(action.data.items), totalCount: action.data.totalCount, error: action.data.error}}
        case'FOLLOW' :{return  {...state, user:state.user.map((m:any)=> m.id === action.id? {...m, followed:true}: m ) } }
        case'UNFOLLOW' :{return {...state, user:state.user.map((m:any)=> m.id === action.id? {...m, followed:false}: m ) }}
        case "PAGE-USER": {return {...state, page: action.page}}


default: return state
    }
}

type followACType = ReturnType<typeof followAC >
type unfollowACType = ReturnType<typeof unfollowAC >
type dataUsersACType = ReturnType<typeof dataUsersAC>
type pageUserACType = ReturnType<typeof pageUserAC >
export const followAC = (id: string) => {return { type: 'FOLLOW',id}as const}
export const unfollowAC = (id: string) => {return {type: 'UNFOLLOW', id} as const}
export const dataUsersAC = (data: any) => {return {type: "DATA-USERS", data}as const}
export const pageUserAC = (page: any) => {return {type: "PAGE-USER", page}as const}



export default UsersReducer