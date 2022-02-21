import React from "react";
import {connect} from "react-redux";
import {getStatusThunk, postPhotoProfile, profilePage, updateStatusThunk} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthHoc";
import ProfileBloc from "./Profile_Bloc";
import {AppRootStateType} from "../../Redux/Store";


class ContainerProfileAPI extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.profilePage(userId)
        this.props.getStatusThunk(userId)

    }

    render() {
        return <ProfileBloc {...this.props.data}
                            status={this.props.data.status}
                            updateStatusThunk={this.props.updateStatusThunk}
                            postPhotoProfile={this.props.postPhotoProfile}/>
    }

}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        data: state.ProfileReducer,
        authId: state.AuthReducer.id
    }
}

let AuthRedirectComponent = withAuthRedirect(ContainerProfileAPI)


let ContainerProfileAPIWithRouter = withRouter(AuthRedirectComponent)
export const ContainerProfile = connect(mapStateToProps, {
    profilePage,
    updateStatusThunk,
    getStatusThunk,
    postPhotoProfile,
})(ContainerProfileAPIWithRouter)
