import React from "react";
import {connect} from "react-redux";
import {Posts} from "./Posts";


const mapStateToProps = (state:any) => {
    return{
        data:state.PostsReducer.data
    }

}

export const PostsContainer = connect(mapStateToProps)(Posts)

