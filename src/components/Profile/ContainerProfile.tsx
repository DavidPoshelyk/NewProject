import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusThunk, profilePage, updateStatusThunk} from "../../Redux/Profile-reducer";
import { withRouter} from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthHoc";



class ContainerProfileAPI extends React.Component<any, any>{


        componentDidMount() {
            let userId = this.props.match.params.userId
            if(!userId){
                userId = this.props.authId
            }
            this.props.profilePage(userId)
            this.props.getStatusThunk(userId)

        }


    render() {
            return <Profile {...this.props} status={this.props.data.status} updateStatusThunk={this.props.updateStatusThunk}/>
    }

}
 // let AuthRedirectComponent = (props:any) => {
 //     if(!props.isAuth ) return <Redirect to='/login'/>
 //    return <ContainerProfileAPI {...props}/>
 //
 // }

const mapStateToProps = (state: any) => {
    return {
        data: state.ProfileReducer,
        authId: state.AuthReducer.id
    }
}

let AuthRedirectComponent = withAuthRedirect(ContainerProfileAPI)



let ContainerProfileAPIWithRouter = withRouter(AuthRedirectComponent)
export const  ContainerProfile = connect(mapStateToProps, {
    profilePage,
    updateStatusThunk,
    getStatusThunk
})(ContainerProfileAPIWithRouter)
