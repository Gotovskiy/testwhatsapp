import React from "react";
import Message from "./Message";
function MessageList({currentMessages}) {
   const Messages = currentMessages.map((item) => {return (<Message key={item.id} type={item.type} text={item.message}/>)});
   console.log(Messages);
return (
    <>
    {Messages}
    </>);
}

export default MessageList;