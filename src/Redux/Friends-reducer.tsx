import React from "react";

type  TypeinitialState = Array<{id:string, followed: boolean, fullName: string, status: string, location: {city:string, country: string}, images: string }>

const initialState = [
    {id:'1', followed: false, fullName:'Dmitry K.', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
    {id:'2', followed: false, fullName:'Dmitry', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
    {id:'3', followed: false, fullName:'Dmitry', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
    {id:'4', followed: false, fullName:'Dmitry', status:'I am a boss ', location:{city:'Minsk', country: 'Belarus'}, images:'https://pbs.twimg.com/media/E_boYMdXMAYTUmJ?format=jpg&name=large'},
]


  const FriendsReducer = (state:TypeinitialState = initialState, action:any) => {
    switch (action.type) {
        case'FOLLOW' :{
            return  state.map(m=> m.id === action.id? {...m, followed:true}: m )}

        case'UNFOLLOW' :{
            return state.map(m=> m.id === action.id? {...m, followed:false}: m )}

default: return state
    }


};
export default FriendsReducer

export const followAC = (id: string) => {return { type: 'FOLLOW',id}}

export const unfollowAC = (id: string) => {
    return {type: 'UNFOLLOW', id}}
