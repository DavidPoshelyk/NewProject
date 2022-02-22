import React from 'react';
import ContentContainer from "../ContentContainer/Content_Container";
import UsersContainer from "../Users/UsersContainer";


export const Friends = React.memo ( () => {
    return (
        <ContentContainer>
            <UsersContainer/>
        </ContentContainer>
    );
});


