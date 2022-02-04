import React from 'react';


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE'

let initialState = {data:[{id: 1, messages: ["I do not understand you", "hgyigyuviyvy"], images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"}], Newtextmessage: ""}

const MessagesReducer = (state:any = initialState, action:any):any => {
    switch (action.type){
        case ADD_MESSAGE:

            let New = {
            id: 1,
            messages: [state.Newtextmessage, state.Newtextmessage],
            images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"}

            return {...state, data:[New,...state.data]}


        case UPDATE_NEW_TEXT_MESSAGE:
            console.log(action.NewTextMessage)
            return {...state, Newtextmessage:action.NewTextMessage}

        default: return  state
    };
}

export default MessagesReducer;

export const AddMessageActionCreator = () => ({type:ADD_MESSAGE})
export const UpdateNewTextMessageActionCreator = (text:string)=> ({type:UPDATE_NEW_TEXT_MESSAGE, NewTextMessage:text })