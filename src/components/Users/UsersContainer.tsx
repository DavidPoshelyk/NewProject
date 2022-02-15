import {connect} from "react-redux";
import {
    clickFollowThunk,
    clickUnfollowThunk,
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

    paginationUsers = (page: number) => {
        this.props.paginationUsers(page)
    }

    render() {
        return <UsersBloc data={this.props.data}
                      // clickUnfollowThunk={this.props.clickUnfollowThunk}
                      // clickFollowThunk={this.props.clickFollowThunk}
                          paginationUsers={this.paginationUsers}
        />
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
    paginationUsers,
}))(withAuthRedirect(UsersContainer))


