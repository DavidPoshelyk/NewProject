import React from 'react';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

export type _stateType = {
    Newtextpost:string
    Newtextmessage:string
    DataPosts:Array<TypePosts>
    MessagesData:Array<TypeMessages>
    DialogsData:Array<TypeDialogs>
    FriendsData:Array<TypeFriends>

}
export type TypeStore = {
    _renderDom:()=>void
    _state:_stateType
    newChangeMessage:(New:string)=>void
    subscriber:(observer:any)=>void
    dispatch:(action:string)=>void
    GetState:()=>{}
    addMessage:()=>void
}



 // export type StateType = {
 //     Newtextmessage:string
 //     Newtextpost:string
 //     DataPosts:Array<TypePosts>
 //     MessagesData:Array<TypeMessages>
 //     DialogsData: Array<TypeDialogs>
 //     FriendsData: Array<TypeFriends>
 // }
 export  type TypeFriends = {
     id: number,
     images: string,
     name: string
     status: boolean
 }
export type TypeDialogs = {
    id: string
    name: string
    image:string
}

export type  TypeMessages = {
    messages: Array<string>
    id: number
    images:string
}


export type TypePosts = {
    item: boolean,
    like: number,
    info: string
}
export  type userImages = Array<string>

export let store:TypeStore = {
     _renderDom() {
     },
     _state: {
        Newtextpost: '',
        Newtextmessage: '',


        DataPosts: [
            {item: true, like: 4, info: 'Html hvuyvivfi'},
        ],
        MessagesData: [
            {id: 1, messages: ["I do not understand you", "hgyigyuviyvy"], images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"},
            {id: 1, messages: ["I do not understand you", 'buibuibuob'], images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"},
        ],

        DialogsData: [
            {id: "1", name: 'Kiriil', image:'https://cdn.disney.ru/assets/w693/a84b47d4-239a-4305-b3e4-54300e7b974a.webp' },
            {id: "2", name: 'vitali' ,image:'https://sun9-10.userapi.com/impg/O8Qx2YwJXBJuSxlwb6BDMsenAFucZufqNMX1Ww/dTjWFjFfsM8.jpg?size=940x627&quality=96&sign=3eb1ab6eb348d1dbabb0355e0b145bae&type=album' },
            {id: "3", name: 'Andrey', image:'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg' },
            {id: "3", name: 'Andrey', image:'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg' },
            {id: "3", name: 'Andrey', image:'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg' },
            {id: "3", name: 'Andrey', image:'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg' },
            {id: "3", name: 'Andrey', image:'https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg' },
        ],
        FriendsData: [
            {id:1, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Valera', status:false},
            {id:2, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Katya', status: true},
            {id:3, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Anton', status: false},
            {id:4, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Slava', status: false},
            {id:5, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Nikita', status: false},
            {id:6, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Andrey', status: true},
            {id:6, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Andrey', status: true},
            {id:6, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Andrey', status: true},
            {id:6, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Andrey', status: true},
            {id:6, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Andrey', status: true},
        ]
    },
    GetState() {
        return this._state
    },
    addMessage(){
        let Newtext: TypeMessages = {
            id: 1,
            messages: [this._state.Newtextmessage, this._state.Newtextmessage],
            images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"
        }
        this._state.MessagesData.push(Newtext)
        this._renderDom()
    },
    newChangeMessage(New:string){
        this._state.Newtextmessage = New;
        this._renderDom()
    },
    subscriber(renderDom) {
        this._renderDom = renderDom
    },

    dispatch(action:any){
         if(action.type ==='ADD-POST'){
             let New:TypePosts = {
                 item: true,
                 like: 0,
                 info: this._state.Newtextpost
             }
             this._state.DataPosts.push(New);
             this._renderDom()
         } else
             if (action.type === 'UPDATE-NEW-TEXT-POST'){
             this._state.Newtextpost = action.NewPost;
             this._renderDom()
         } else
             if (action.type === 'ADD-MESSAGE') {
                 let New: TypeMessages = {
                     id: 1,
                     messages: [this._state.Newtextmessage, this._state.Newtextmessage],
                     images: "https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"
                 }
                 this._state.MessagesData.push(New)
                 this._renderDom()
             } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
                 this._state.Newtextmessage = action.NewTextMessage;
                 this._renderDom()
             }

    }

}


export const AddPostActionCreator = () => ({type:ADD_POST})
export const UpdateNewTextPostActionCreator = (text:string)=> ({type:UPDATE_NEW_TEXT_POST,NewPost:text })
export const AddMessageActionCreator = () => ({type:ADD_MESSAGE})
export const UpdateNewTextMessageActionCreator = (text:string)=> ({type:UPDATE_NEW_TEXT_MESSAGE, NewTextMessage:text })


