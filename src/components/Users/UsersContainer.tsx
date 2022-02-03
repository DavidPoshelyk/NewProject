import {connect} from "react-redux";
import {clickFollowThunk, clickUnfollowThunk, getUserThunk, moreUsers} from "../../Redux/Users-reducer";
import React from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../hoc/withAuthHoc";
import {Messages} from "../Messages/Messages";
import {compose} from "redux";


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

export default compose(connect(mapStateToProps, {
    clickFollowThunk,
    clickUnfollowThunk,
    getUserThunk,
    moreUsers,
}))(withAuthRedirect(UsersAPIComponent))


