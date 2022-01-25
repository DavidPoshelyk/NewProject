import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import  {profilePage} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";






class ContainerProfileAPI extends React.Component<any, any>{


        componentDidMount() {
            let userId = this.props.match.params.userId
            if(!userId){
                userId = 21625
            }
            this.props.profilePage(userId)
        }


    render() {
            return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state: any) => {
    return {
        data: state.ProfileReducer
    }
}

 let ContainerProfileAPIWithRouter = withRouter(ContainerProfileAPI)
export const  ContainerProfile = connect(mapStateToProps, {profilePage})(ContainerProfileAPIWithRouter)