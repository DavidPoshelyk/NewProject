import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {authDataThunk, authLoginOutThunk} from "../../Redux/auth-reducer";


export class HeaderContainerAPI extends React.Component<any, any> {
     componentDidMount() {
         this.props.authDataThunk()

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


export const HeaderContainer = connect(mapStateToProps, {authDataThunk,
    authLoginOutThunk})(HeaderContainerAPI)