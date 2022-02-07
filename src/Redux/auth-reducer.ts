import { AuthAPI } from "../api/AuthAPI";
import {reset, stopSubmit} from "redux-form";


const initialState = {
     id:null,
    login:null,
    email:null,
    isAuth:false,

}

const AuthReducer = (state = initialState, action:authDataACType) => {

switch (action.type) {
    case "AUTH-DATA": {
        console.log(action.data)
        return {...state, ...action.data }}
        default:return state
}
};

type authDataACType = ReturnType<typeof authDataAC >
export const authDataAC = (id:number|null,login:string|null,email:string|null, isAuth:boolean) => {return{type:'AUTH-DATA', data:{id,login,email,isAuth}}as const}


export const  authDataThunk = () => {
    return (dispatch:any)=> {
        AuthAPI.authData().then(response => {
            if(response.resultCode === 0){
                let {email, id, login} = response.data
                dispatch(authDataAC(id, login, email, true))
            }
        })
    }
}
export const  authLoginThunk = (email:string, password:string, rememberMe:boolean) => {
    return (dispatch:any)=> {

        AuthAPI.authPost(email, password, rememberMe).then(response => {
            console.log(response)
            if(response.resultCode === 0){
                dispatch(authDataThunk())
                dispatch( reset('login'))
            } else {
                let error = response.messages.length > 0 ? response.messages[0]  : "Some error"
                let action = stopSubmit('login', {_error:error})
                dispatch(action)
            }

        })
    }
}
export const  authLoginOutThunk = () => {
    return (dispatch:any)=> {
        AuthAPI.authDelete().then(response => {
            if(response.resultCode === 0){
                // dispatch(authDataAC(0, '', ''))
                dispatch(authDataAC(null, null, null, false))
            }
        })
    }
}





export default AuthReducer;
