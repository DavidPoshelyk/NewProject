import React from 'react';
import PostsReducer from "../../Reducer/Posts-reducer";
import MessagesReducer from "../../Reducer/Messages-reducer"
import SettingsReducer from "../../Reducer/Settings-reducer";







 export type dataPostsType = {data: Array<{ item: boolean, like: number, info: string }>, Newtextpost: string }
 export type messagesDataType = { data: Array<{ id: number, messages: Array<string>, images: string }>, Newtextmessage: string }
export type GeneralSettingsType ={
    myAge: { data: string, isDone: boolean, NewTextGeneralMyage: string },
    Email: { data: string, isDone: boolean, NewTextGeneralMyEmail: string },
    married: { data: string, isDone: boolean, NewTextGeneralMarried: string },
    education: { data: string, isDone: boolean, NewTextGeneralEducation: string },
}


export type _stateType = {
    DataPosts: dataPostsType
    MessagesData: messagesDataType
    DialogsData: Array<{ id: string, name: string, image: string }>
    FriendsData: Array<{ id: number, images: string, name: string, status: boolean }>
    GeneralSettings:GeneralSettingsType

}

export type StoreType = {
    _renderDom: ()=> void
    _state: _stateType
    GetState:any
    subscriber:any
    dispatch:any
}

export let store:StoreType = {
     _renderDom() {
     },
     _state: {

         DataPosts:{ data:[{item: true, like: 4, info: 'Html hvuyvivfi'}], Newtextpost:''},

         MessagesData:{data:[{id: 1, messages: ["I do not understand you", "hgyigyuviyvy"], images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"}], Newtextmessage: ""},

         DialogsData:[{id: "1", name: 'Kiriil', image:'https://cdn.disney.ru/assets/w693/a84b47d4-239a-4305-b3e4-54300e7b974a.webp' }],

         FriendsData:[{id:1, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Valera', status:false}],

         GeneralSettings:{
             myAge: {data: '', isDone:false, NewTextGeneralMyage: ''},
             Email:{data:'', isDone:false, NewTextGeneralMyEmail: ''},
             married:{data:'', isDone:false, NewTextGeneralMarried: ''},
             education:{data:'', isDone:false, NewTextGeneralEducation: ''},
         }

    },
    GetState() {
        return this._state
    },
    subscriber(renderDom: ()=> void) {
        this._renderDom = renderDom
    },





    dispatch(action:any){

        this._state.DataPosts = PostsReducer(this._state.DataPosts, action)
        this._state.MessagesData = MessagesReducer(this._state.MessagesData, action)
        this._state.GeneralSettings = SettingsReducer( this._state.GeneralSettings, action)

        this._renderDom()





    }

}










