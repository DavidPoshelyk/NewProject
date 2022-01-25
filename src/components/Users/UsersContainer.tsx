import {connect} from "react-redux";
import {clickFollowThunk, clickUnfollowThunk, getUserThunk, moreUsers} from "../../Redux/Users-reducer";
import React from "react";
import {Users} from "./Users";


class UsersAPIComponent extends React.Component<any, any> {


    componentDidMount() {
        this.props.getUserThunk()
    }

    moreUsers = (page: number) => {
        this.props.moreUsers(page)
    }

    render() {
        return <Users data={this.props.data}
                      clickUnfollowThunk={this.props.clickUnfollowThunk}
                      clickFollowThunk={this.props.clickFollowThunk}
                      moreUser={this.moreUsers}/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.UsersReducer
    }
}

export const UsersContainer = connect(mapStateToProps, {
    clickFollowThunk,
    clickUnfollowThunk,
    getUserThunk,
    moreUsers,
})(UsersAPIComponent)
