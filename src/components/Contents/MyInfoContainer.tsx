import React from 'react';
import {connect} from "react-redux";
import {MyInfo} from "./MyInfo.";

const  mapStateToProps = (state:any) => {
    return{data:state.SettingsReducer}
}

export const MyInfoContainer = connect(mapStateToProps)(MyInfo)