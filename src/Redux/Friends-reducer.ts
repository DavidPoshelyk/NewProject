
import {FriendsDataType} from "../components/Store/Store";


const initialState = [{id:1, images:'https://cdn1.byjus.com/wp-content/uploads/2019/09/my-best-friend-essay-for-class-1.png', name: 'Valera', status:false}]


const FriendsReducer = (state:FriendsDataType = initialState, action:any) => {

    return state
};

export default FriendsReducer;