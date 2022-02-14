import React from 'react';
import Button from "@mui/material/Button";
import BasicPagination from "../../component/Pagination/Pagination_Bloc";
import s from './Users_Bloc.module.css'
import User from "../User/User";
import Divider from "@mui/material/Divider";

const UsersBloc = () => {
    return (
        <div className={s.UsersBloc}>
            <div className={s.buttonGrope}>
                <Button  color='primary' sx={{width:'20%'}}>
                    All Users
                </Button>
                <Button sx={{width:'20%'}} >
                    Subscribers
                </Button>
            </div>
            <Divider />
            <div className={s.users}>
                <User/>
                <Divider />
                <User/>
                <Divider />
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
<div className={s.userPagination}>
    <BasicPagination/>
</div>






        </div>
    );
};

export default UsersBloc;