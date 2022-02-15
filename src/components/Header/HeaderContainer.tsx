import React from "react";
import {connect} from "react-redux";
import {authDataThunk, authLoginOutThunk} from "../../Redux/Auth-reducer";
import ButtonAppBar from "./App Bar";


export class HeaderContainerAPI extends React.Component<any, any> {
     componentDidMount() {
         this.props.authDataThunk()

    }

    render() {
        return <ButtonAppBar {...this.props}/>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.AuthReducer
    }

}


export const HeaderContainer = connect(mapStateToProps, {authDataThunk,
    authLoginOutThunk})(HeaderContainerAPI)