import React, {ChangeEvent} from "react";
import {connect} from "react-redux";

import { withAuthRedirect } from "../hoc/withAuthHoc";
import {Messages} from "./Messages";
import {AddMessageACThunk} from "../../Redux/Messages-reducer";




export  const  MessagesContainer = connect(()=> {}, {AddMessageACThunk})(withAuthRedirect(Messages))