import React from "react";

// type  TypeinitialState = {id:string, followed: boolean, fullName: string, status: string, location: {city:string, country: string}, images: string }

const initialState = [
    {id:'1', followed: false, name:'Dmitry K.', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
    // {id:'2', followed: false, fullName:'Dmitry', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
    // {id:'3', followed: false, fullName:'Dmitry', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
    // {id:'4', followed: false, fullName:'Dmitry', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
]


 const FriendsReducer = (state:any = initialState, action:followACType|unfollowACType| dataFriendsACType ) => {
    switch (action.type) {
        case'FOLLOW' :{ return  state.map((m:any)=> m.id === action.id? {...m, followed:true}: m )}
        case'UNFOLLOW' :{ return state.map((m:any)=> m.id === action.id? {...m, followed:false}: m )}
        // case 'ADD-FRIENDS': { let newFriends = {id:action.id, followed: false, fullName:action.fullName, status:action.status, location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'}
        //     return [...state,newFriends  ] }
        case "DATA-FRIENDS": {

            return [...state] = action.array}

default: return state
    }


}

type followACType = ReturnType<typeof followAC >
type unfollowACType = ReturnType<typeof unfollowAC >
// type addFriendsACType = ReturnType<typeof addFriendsAC >
type dataFriendsACType = ReturnType<typeof dataFriendsAC >
export const followAC = (id: string) => {return { type: 'FOLLOW',id}as const}
export const unfollowAC = (id: string) => {return {type: 'UNFOLLOW', id} as const}
// export const addFriendsAC = (id: string, fullName: string,status: string) => {return {type: 'ADD-FRIENDS', id, fullName,status } as const}
export const dataFriendsAC = (array: any) => {return {type: "DATA-FRIENDS", array}as const}
export default FriendsReducer