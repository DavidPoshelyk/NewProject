import { createSelector } from "reselect";
import { AppRootStateType } from "../../Redux/Store";
import { UsersReducerType } from "../../Redux/Users-reducer";

const getUsers = (state:AppRootStateType) => {
    return state.UsersReducer
}
export const getUsersSelector = createSelector(getUsers, (users:UsersReducerType)=> {
   // for()
    return users
})
const getisSubscribers = (state:AppRootStateType) => {
    return state.UsersReducer.isSubscribers
}
export  const getIsSubscribersSelector = createSelector(getisSubscribers, (isSubscribers:boolean)=> {
    return isSubscribers
})
const getPageUser = (state:AppRootStateType) => {
  return state.UsersReducer.page
}
export const getPageUserSelector = createSelector(getPageUser, (page:number)=> {
  return page
})