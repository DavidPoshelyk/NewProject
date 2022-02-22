import {AuthAPI} from "./api/AuthAPI";
import {reset, stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {ProfileAPI} from "./api/ProfileAPI";


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    myPhotos: null
}

type AuthReducerType = {
    id: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean,
    myPhotos: null | string
}

type authDataACType = ReturnType<typeof authDataAC>
type setMyPhotoACType = ReturnType<typeof setMyPhotoAC>


const AuthReducer = (state: AuthReducerType = initialState, action: authDataACType | setMyPhotoACType) => {
    switch (action.type) {
        case "AUTH-DATA": {
            return {...state, ...action.data}
        }
        case "SET-MY-PFOTO": {
            return {...state, myPhotos: action.image}
        }
        default:
            return state
    }
};

export function authDataAC(id: null | number, login: null | string, email: null | string, isAuth: boolean) {
    return {type: 'AUTH-DATA', data: {id, login, email, isAuth}} as const
}

const setMyPhotoAC = (image: string) => ({type: 'SET-MY-PFOTO', image} as const)


export const  authDataThunk = () => (dispatch:Dispatch)=> {
        return AuthAPI.authData().then(response => {
            if(response.data.resultCode === 0){
                let {email, id, login} = response.data.data
                dispatch(authDataAC(id, login, email, true))
            }
        })

}
export const  authLoginThunk = (email:string, password:string, rememberMe:boolean) => {
    return (dispatch:any)=> {
        AuthAPI.authPost(email, password, rememberMe).then(response => {
            console.log(response)
            if(response.data.resultCode === 0){
                dispatch(authDataThunk())
                dispatch(reset('login'))
            } else {
                let error = response.data.messages.length > 0 ? response.data.messages[0]  : "Some error"
                let action = stopSubmit('login', {_error:error})
                dispatch(action)
            }

        })
    }
}

;
export const authLoginOutThunk = () => {
    return (dispatch: Dispatch) => {
        AuthAPI.authDelete().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authDataAC(null, null, null, false))
            }
        })
    }
}

// export const getMyPhotoThunk = (userId: number) => {
//     return (dispatch: Dispatch) => ProfileAPI.profilePage(userId).then(res => {
//         dispatch(setMyPhotoAC(res.data.photos.large))
//     }).catch(rej => {
//         console.warn(rej)
//     })
// }


export default AuthReducer;
