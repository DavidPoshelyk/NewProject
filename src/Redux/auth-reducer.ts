

const initialState = {
     id:null,
    login:null,
    email:null,
    isAuth:false
}

const AuthReducer = (state = initialState, action:authDataACType) => {

switch (action.type) {
    case "AUTH-DATA": {
        return {...state, ...action.data, isAuth:true }}
        default:return state
}
};

type authDataACType = ReturnType<typeof authDataAC >
export const authDataAC = (id:number,login:string,email:string) => {return{type:'AUTH-DATA', data:{id,login,email}}as const}



export default AuthReducer;
