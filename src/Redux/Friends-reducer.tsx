import React from "react";

// type  TypeinitialState = {id:string, followed: boolean, fullName: string, status: string, location: {city:string, country: string}, images: string }

const initialState = {
    user: [],
    totalCount: 0,
    page: 1,
    count: 100,
}



 const FriendsReducer = (state:any = initialState,  action:followACType|unfollowACType| dataFriendsACType|dataPageACType ) => {
    switch (action.type) {
        case "DATA-FRIENDS": {return  {...state, user: action.array.items, totalCount: action.array.totalCount}}
        case'FOLLOW' :{ return  state.map((m:any)=> m.id === action.id? {...m, followed:true}: m )}
        case'UNFOLLOW' :{ return state.map((m:any)=> m.id === action.id? {...m, followed:false}: m )}
        // case 'ADD-FRIENDS': { let newFriends = {id:action.id, followed: false, fullName:action.fullName, status:action.status, location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'}
        //     return [...state,newFriends  ] }
        case "DATA-PAGE": {return {...state, page: Math.ceil(state.totalCount/state.count ) }}


default: return state
    }


}

type followACType = ReturnType<typeof followAC >
type unfollowACType = ReturnType<typeof unfollowAC >
// type addFriendsACType = ReturnType<typeof addFriendsAC >
type dataFriendsACType = ReturnType<typeof dataFriendsAC >
type dataPageACType = ReturnType<typeof dataPageAC >
export const followAC = (id: string) => {return { type: 'FOLLOW',id}as const}
export const unfollowAC = (id: string) => {return {type: 'UNFOLLOW', id} as const}
// export const addFriendsAC = (id: string, fullName: string,status: string) => {return {type: 'ADD-FRIENDS', id, fullName,status } as const}
export const dataFriendsAC = (array: any) => {return {type: "DATA-FRIENDS", array}as const}
export const dataPageAC = (page: any) => {return {type: "DATA-PAGE", page}as const}

export default FriendsReducer