import React from 'react';
import Button from "@mui/material/Button";
import BasicPagination from "../../component/Pagination/Pagination_Bloc";
import s from './Users_Bloc.module.css'
import User from "../../Bloc_Material_Ui/User/User";
import Divider from "@mui/material/Divider";
import CustomizedInputBase from "../../Bloc_Material_Ui/Input_Text/CustomizedInputBase";


const UsersBloc = (props:any) => {
    console.log(props)

    return (
        <div className={s.UsersBloc}>
            <div className={s.buttonGrope}>
                <Button
                    onClick={()=>{
                        props.getSubscribers(false)
                    }}
                    variant={props.isSubscribers? 'text':'contained'} sx={{width:'20%'}}>
                    All Users
                </Button>
                <Button
                    onClick={()=>{
                        props.getSubscribers(true)
                    }}
                    variant={props.isSubscribers? 'contained':'text'}
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
        totalCount={props.data.totalCount}
        page={props.page}
    />

</div>






        </div>
    );
};

export default UsersBloc;