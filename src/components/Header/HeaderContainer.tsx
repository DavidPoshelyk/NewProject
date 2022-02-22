import React from "react";
import {connect} from "react-redux";
import {authLoginOutThunk} from "../../Redux/Auth-reducer";
import ButtonAppBar from "./App Bar";
import {withAuthRedirect} from "../hoc/withAuthHoc";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        // this.props.getMyPhotoThunk()
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


export default React.memo(connect(mapStateToProps, {authLoginOutThunk})(HeaderContainer))