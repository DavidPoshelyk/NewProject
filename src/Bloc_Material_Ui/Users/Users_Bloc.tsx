import React, { useState } from 'react';
import Button from "@mui/material/Button";
import BasicPagination from "../../component/Pagination/Pagination_Bloc";
import s from './Users_Bloc.module.css'
import User from "../User/User";
import Divider from "@mui/material/Divider";
import CustomizedInputBase from "../Input_Text/CustomizedInputBase";


const UsersBloc = (props:any) => {

    return (
        <div className={s.UsersBloc}>
            <div className={s.buttonGrope}>
                <Button
                    onClick={()=>{

                        props.getSubscribers(false)
                    }}
                    variant={props.isFriend? 'contained':'text'} sx={{width:'20%'}}>
                    All Users
                </Button>
                <Button
                    onClick={()=>{

                        props.getSubscribers(true)
                    }}
                    variant={props.isFriend? 'text':'contained'}
                    sx={{width:'20%'}} >
                    Subscribers
                </Button>
                <CustomizedInputBase/>
            </div>
            <Divider />
            <div>

            </div>
            <div className={s.users}>
                {props.data.user.map((m:any, id:any=m.id) => <User
                    followProgress={props.data.followProgress}
                    key={id}
                    clickUnfollowThunk={props.clickUnfollowThunk}
                    clickFollowThunk={props.clickFollowThunk}
                    {...m}/>)}
            </div>
<div className={s.userPagination}>
    <BasicPagination
        paginationUsers={props.paginationUsers}
        totalCount={props.data.totalCount}/>
</div>






        </div>
    );
};

export default UsersBloc;