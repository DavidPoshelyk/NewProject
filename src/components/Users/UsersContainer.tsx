import {connect} from "react-redux";
import {
    clickFollowThunk,
    clickUnfollowThunk, getSubscribers,
    getUserThunk,
    paginationUsers
} from "../../Redux/Users-reducer";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthHoc";
import {compose} from "redux";
import UsersBloc from "./Users_Bloc";
import {AppRootStateType} from "../../Redux/Store";
import {getIsSubscribersSelector,getPageUserSelector,  getUsersSelector } from "./Users-reselect";

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUserThunk()
    }
    paginationUsers = (page: number, isSubscriber?: boolean) => {
        this.props.paginationUsers(page, isSubscriber)
    }

    render() {
        return <UsersBloc
            isSubscribers={this.props.isSubscribers}
            data={this.props.data}
            clickUnfollowThunk={this.props.clickUnfollowThunk}
            clickFollowThunk={this.props.clickFollowThunk}
            paginationUsers={this.paginationUsers}
            getSubscribers={this.props.getSubscribers}
            page={this.props.page}

        />
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        data: getUsersSelector(state),
        isSubscribers: getIsSubscribersSelector(state),
        page: getPageUserSelector(state)
    }
}

export default compose(connect(mapStateToProps, {
    clickFollowThunk,
    clickUnfollowThunk,
    getUserThunk,
    paginationUsers,
    getSubscribers,

}))(withAuthRedirect(UsersContainer))


