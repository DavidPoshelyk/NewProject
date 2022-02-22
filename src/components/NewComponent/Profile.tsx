import React from 'react';
import ContentContainer from "../ContentContainer/Content_Container";
import {ContainerProfile} from "../Profile/ContainerProfile";

 export const Profile = React.memo(() => {
    return (
        <ContentContainer>
            <ContainerProfile/>
        </ContentContainer>
    );
});

