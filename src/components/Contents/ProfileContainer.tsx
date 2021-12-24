import React from 'react';
import {PostsContainer} from "./PostsContainer";
import {MyInfoContainer} from "./MyInfoContainer";
import {ContentsContainer} from "./ContentsContainer";

const ProfileContainer = () => {
    return (
        <div>
            <MyInfoContainer/>
            <ContentsContainer/>
            <PostsContainer/>
        </div>
    );
};

export default ProfileContainer;