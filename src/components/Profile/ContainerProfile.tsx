import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import axios from "axios";
import {dataProfile} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";






class ContainerProfileAPI extends React.Component<any, any>{


        componentDidMount() {
            let userId = this.props.match.params.userId
            if(!userId){
                userId = 21625
            }
            console.log(userId)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
               this.props.dataProfile(response.data)

            })
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
export const  ContainerProfile = connect(mapStateToProps, {
    dataProfile

})(ContainerProfileAPIWithRouter)