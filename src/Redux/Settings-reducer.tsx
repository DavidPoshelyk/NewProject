import React from 'react';


const UPDATE_NEW_TEXT_GENERAL_MYAGE = 'UPDATE_NEW_TEXT_GENERAL_MYAGE'
const UPDATE_NEW_TEXT_GENERAL_MARRIED = 'UPDATE_NEW_TEXT_GENERAL_MARRIED'
const UPDATE_NEW_TEXT_GENERAL_EDUCATION = 'UPDATE_NEW_TEXT_GENERAL_EDUCATION'
const UPDATE_NEW_TEXT_GENERAL_MYEMAIL = 'UPDATE_NEW_TEXT_GENERAL_MYEMAIL'
const ADD_SAVE_GEBERAL_SETTINGS = 'ADD_SAVE_GEBERAL_SETTINGS'

let initialSettings = {
    myAge: {data: '', isDone:false, NewTextGeneralMyage: ''},
    Email:{data:'', isDone:false, NewTextGeneralMyEmail: ''},
    married:{data:'', isDone:false, NewTextGeneralMarried: ''},
    education:{data:'', isDone:false, NewTextGeneralEducation: ''},
}

const SettingsReducer = (state:any = initialSettings, action:any) => {
    switch (action.type){
        case UPDATE_NEW_TEXT_GENERAL_MYAGE:   state.myAge.NewTextGeneralMyage = action.textMyage; return state
        case UPDATE_NEW_TEXT_GENERAL_MARRIED:  state.married.NewTextGeneralMarried = action.textMarried; return state
        case UPDATE_NEW_TEXT_GENERAL_EDUCATION: state.education.NewTextGeneralEducation = action.textEducation; return state
        case UPDATE_NEW_TEXT_GENERAL_MYEMAIL:   state.Email.NewTextGeneralMyEmail = action.textMyemail; return state
        case ADD_SAVE_GEBERAL_SETTINGS:
            state.education.data = state.education.NewTextGeneralEducation
            state.myAge.data = state.myAge.NewTextGeneralMyage
            state.Email.data = state.Email.NewTextGeneralMyEmail
            state.married.data = state.married.NewTextGeneralMarried
            return state
        default: return state
    }



};

export default SettingsReducer;

export const UpdateNewTextGeneralMyAge = (text:string) => ({type:UPDATE_NEW_TEXT_GENERAL_MYAGE, textMyage:text})
export const UpdateNewTextGeneralMarried = (text:string) => ({type:UPDATE_NEW_TEXT_GENERAL_MARRIED, textMarried:text})
export const UpdateNewTextGeneralEducation = (text:string) => ({type:UPDATE_NEW_TEXT_GENERAL_EDUCATION, textEducation:text})
export const UpdateNewTextGeneralMyEmail = (text:string) => ({type:UPDATE_NEW_TEXT_GENERAL_MYEMAIL, textMyemail:text})
export const SaveGeneralSettings = () => ({type:ADD_SAVE_GEBERAL_SETTINGS})
