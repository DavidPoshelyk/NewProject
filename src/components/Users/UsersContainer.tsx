import {connect} from "react-redux";
import {clickFollow, pageUser, clickUnfollow, dataUsers, isFetching} from "../../Redux/Users-reducer";
import React from "react";
import {Users} from "./Users";
import {UserAPI} from "../../api/UserAPI";

class UsersAPIComponent extends React.Component<any, any> {


    componentDidMount() {
        this.props.isFetching(true)
        UserAPI.GetUsers().then(data => {
            this.props.dataUsers(data)
            this.props.isFetching(false)
        })
    }

    moreUsers = (page: number) => {
        // this.props.isFetching(true)
        this.props.pageUser(page)
        UserAPI.MoreUsers(page).then(data=>{
            this.props.dataUsers(data)
            // this.props.isFetching(false)
        })
    }

    render() {
        return <Users data={this.props.data}
                      clickUnfollow={this.props.clickUnfollow}
                      clickFollow={this.props.clickFollow}
                      moreUser={this.moreUsers}

        />
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.UsersReducer
    }
}

export const UsersContainer = connect(mapStateToProps, {
    clickFollow,
    clickUnfollow,
    dataUsers,
    pageUser,
    isFetching
})(UsersAPIComponent)
