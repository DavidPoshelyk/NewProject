import React from 'react';
import {MyPosts} from "./MyPost";
import {ProfileInfo} from "./ProfileInfo";

const Profile = (props:any) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo {...props.data} />
            <MyPosts {...props.data}/>
        </div>
    );
};

export default Profile;