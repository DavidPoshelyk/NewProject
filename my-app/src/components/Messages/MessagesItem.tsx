import React from "react";


export  type TypeMessagesData = {
    messages: string
}
export  const MessagesItem: React.FC<TypeMessagesData> = (props) => {
    return <div> {props.messages} </div>
}

