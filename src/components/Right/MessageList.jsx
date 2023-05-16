import React from "react";
import Message from "./Message";
function MessageList({currentMessages}) {
   const Messages = currentMessages.map((item) => {return (<Message key={item.id} type={"received"} text={item.message}/>)});
return (
    <>
    {Messages}
    </>);
}

export default MessageList;