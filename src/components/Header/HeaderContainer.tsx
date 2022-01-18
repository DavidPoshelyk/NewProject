import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import axios from "axios";
import { authDataAC } from "../../Redux/auth-reducer";


export class HeaderContainerAPI extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if(response.data.resultCode === 0){
                let {email, id, login} = response.data.data
                this.props.authDataAC(id, login, email)
            }
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.AuthReducer
    }

}


export const HeaderContainer = connect(mapStateToProps, {authDataAC})(HeaderContainerAPI)