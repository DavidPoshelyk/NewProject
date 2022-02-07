import React from 'react';


const ADD_MESSAGE = 'ADD-MESSAGE'


let initialState = {data:[{id: 1, messages: ["I do not understand you", "hgyigyuviyvy"], images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"}], Newtextmessage: ""}

const MessagesReducer = (state:any = initialState, action:any):any => {
    switch (action.type){
        case ADD_MESSAGE:
            let New = {
            id: 1,
            messages: [action.sendMessage, action.sendMessage],
            images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"}

            return {...state, data:[New,...state.data]}

        default: return  state
    };
}

export default MessagesReducer;

const AddMessageAC = (sendMessage:string) => ({type:ADD_MESSAGE, sendMessage})
export const AddMessageACThunk = (sendMessage:string) => {
     return (dispatch:any)=>{
         dispatch(AddMessageAC(sendMessage))
     }

}

