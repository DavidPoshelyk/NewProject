import {authDataThunk} from "./Auth-reducer";
import {Dispatch} from "redux";




interface AppReducerType {initialized: boolean}
type setInitializedType = ReturnType<typeof setInitialized>

const initialState = {initialized: false,}
const AppReducer = (state: AppReducerType = initialState, action: setInitializedType) => {
    switch (action.type) {
        case "SET-INITIALAIZED": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
};

const setInitialized = () => ({type: 'SET-INITIALAIZED'} as const)


export const appInitializedThunk = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(authDataThunk())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })

}


export default AppReducer;
