import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";

const mapStateToPropsRedirect = (state: AppRootStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth
    }
}

 export const withAuthRedirect = (Component:any) => {
   class RedirectComponent  extends React.Component<any, any>{
       render() {

           if(!this.props.isAuth ) return <Redirect to='/login'/>
           return <Component {...this.props} />
       }
   }
     let  AuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)


     return AuthRedirectComponent

};

