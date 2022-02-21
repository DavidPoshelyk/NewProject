import { Dispatch } from "redux";
import {authDataThunk} from "./Auth-reducer";


const initialState = {
    initialized:false,

}
type AppReducerType = {
    initialized:boolean
}

const AppReducer = (state:AppReducerType = initialState, action:any) => {

switch (action.type) {
    case "SET-INITIALAIZED": {
        return {...state, initialized:true}}
        default:return state
}
};


const setInitialized = () => ({type:'SET-INITIALAIZED'})


export const  appInitializedThunk = () => (dispatch:any)=> {
        let promise = dispatch(authDataThunk())
    Promise.all([promise]).then(()=>{
dispatch(setInitialized())
        console.log('res')
    })

}


export default AppReducer;
