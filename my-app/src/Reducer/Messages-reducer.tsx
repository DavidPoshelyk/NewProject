import React from 'react';
import {messagesDataType} from "../components/State/state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE'


const MessagesReducer = (state:messagesDataType, action:any):messagesDataType => {
    switch (action.type){
        case ADD_MESSAGE:
            let New = {
            id: 1,
            messages: [state.Newtextmessage, state.Newtextmessage],
            images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"}
            state.data.push(New)
            return state


        case UPDATE_NEW_TEXT_MESSAGE:
           state.Newtextmessage = action.NewTextMessage;
            console.log(action.NewTextMessage)
          return state

        default: return  state
    };
}

export default MessagesReducer;

export const AddMessageActionCreator = () => ({type:ADD_MESSAGE})
export const UpdateNewTextMessageActionCreator = (text:string)=> ({type:UPDATE_NEW_TEXT_MESSAGE, NewTextMessage:text })