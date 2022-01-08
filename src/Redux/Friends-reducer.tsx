import React from "react";

// type  TypeinitialState = {id:string, followed: boolean, fullName: string, status: string, location: {city:string, country: string}, images: string }

const initialState = {
    user: [],
    totalCount: 1,
    page: 1,
    count: 20,
    error: null
}



 const FriendsReducer = (state:any = initialState,  action:followACType|unfollowACType| dataFriendsACType|countUserACType|pageUserACType) => {
    switch (action.type) {
        case "DATA-FRIENDS": {return  {...state, user: action.data.items, totalCount: action.data.totalCount, error: action.data.error}}
        case'FOLLOW' :{ return  state.map((m:any)=> m.id === action.id? {...m, followed:true}: m )}
        case'UNFOLLOW' :{ return state.map((m:any)=> m.id === action.id? {...m, followed:false}: m )}
        case "COUNT-USER": {return {...state, count: action.count}}
        case "PAGE-USER": {return {...state, page: action.page}}


default: return state
    }


}

type followACType = ReturnType<typeof followAC >
type unfollowACType = ReturnType<typeof unfollowAC >
type dataFriendsACType = ReturnType<typeof dataFriendsAC >
type countUserACType = ReturnType<typeof countUserAC >
type pageUserACType = ReturnType<typeof pageUserAC >
export const followAC = (id: string) => {return { type: 'FOLLOW',id}as const}
export const unfollowAC = (id: string) => {return {type: 'UNFOLLOW', id} as const}
export const dataFriendsAC = (data: any) => {return {type: "DATA-FRIENDS", data}as const}
export const countUserAC = (count: any) => {return {type: "COUNT-USER", count}as const}
export const pageUserAC = (page: any) => {return {type: "PAGE-USER", page}as const}



export default FriendsReducer