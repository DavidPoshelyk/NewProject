import React from "react";
import {connect} from "react-redux";
import {authLoginOutThunk, getMyPhotoThunk} from "../../Redux/Auth-reducer";
import ButtonAppBar from "./App Bar";
import {withAuthRedirect} from "../hoc/withAuthHoc";


export class HeaderContainerAPI extends React.Component<any, any> {
    componentDidMount() {
        this.props.getMyPhotoThunk()
    }

    render() {
        return <ButtonAppBar {...this.props}/>;
    }
}

const mapStateToProps = (state: any) => {

    return {
        data: state.AuthReducer,

    }

}


export const HeaderContainer = connect(mapStateToProps, {authLoginOutThunk,getMyPhotoThunk})(HeaderContainerAPI)