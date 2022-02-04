import React from 'react';
import {MyPosts} from "./MyPost";
import {ProfileInfo} from "./ProfileInfo";

const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo {...props.data} status={props.status}  updateStatusThunk={props.updateStatusThunk} />
            <MyPosts {...props.data}/>
        </div>
    );
};

export default Profile;