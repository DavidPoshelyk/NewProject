import {connect} from "react-redux";
import {
    clickFollowThunk,
    clickUnfollowThunk, getSubscribers,
    getUserThunk,
    paginationUsers
} from "../../Redux/Users-reducer";
import React from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../hoc/withAuthHoc";
import {Messages} from "../Messages/Messages";
import {compose} from "redux";
import UsersBloc from "../../Bloc_Material_Ui/Users/Users_Bloc";


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

        />
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.UsersReducer,
        isSubscribers:state.UsersReducer.isSubscribers
    }
}

export default compose(connect(mapStateToProps, {
    clickFollowThunk,
    clickUnfollowThunk,
    getUserThunk,
    paginationUsers,
    getSubscribers,

}))(withAuthRedirect(UsersContainer))


