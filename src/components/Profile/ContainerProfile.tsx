import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import axios from "axios";
import {dataProfile} from "../../Redux/Profile-reducer";






class ContainerProfileAPI extends React.Component<any, any>{


        componentDidMount() {

            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`).then(response => {
               this.props.dataProfile(response.data)

            })
        }


    render() {
        console.log(this.props)
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state: any) => {
    return {
        data: state.ProfileReducer
    }
}


export const  ContainerProfile = connect(mapStateToProps, {
    dataProfile

})(ContainerProfileAPI)