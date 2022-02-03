import { AuthAPI } from "../api/AuthAPI";


const initialState = {
     id:null,
    login:null,
    email:null,
    isAuth:true
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
export const authDataAC = (id:number,login:string,email:string) => {return{type:'AUTH-DATA', data:{id,login,email}}as const}


export const  authDataThunk = () => {
    return (dispatch:any)=> {
        AuthAPI.authData().then(response => {
            if(response.resultCode === 0){
                let {email, id, login} = response.data
                dispatch(authDataAC(id, login, email))
            }
        })
    }
}



export default AuthReducer;
