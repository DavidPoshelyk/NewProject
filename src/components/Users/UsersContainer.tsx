import {connect} from "react-redux";
import {clickFollow, pageUser, clickUnfollow, dataUsers, isFetching} from "../../Redux/Users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

class UsersAPIComponent extends React.Component<any, any> {


    componentDidMount() {
        this.props.isFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            console.log("componentDidMount")
            this.props.dataUsers(response.data)
            this.props.isFetching(false)
        })

    }

    moreUsers = (page: number) => {
        // this.props.isFetching(true)
        this.props.pageUser(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=20`).then(response => {
            this.props.dataUsers(response.data)
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
