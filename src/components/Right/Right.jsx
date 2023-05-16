import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import SendInput from "./SendInput";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/ContactSlice";
const Container = styled.div`
    flex: 70%;
    height: 100%;
    background: url("./img/background.jpg");
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
`
const MessageSpace = styled.div`
overflow:hidden;
height:100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: end;
overflow-y:auto;
overflow-x:hidden;
::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: #262b2c;
}

::-webkit-scrollbar-thumb {
    background: #b4b2b3;
    -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-corner {
    background: #000;
}
&.received {
align-items: start;
}
&.send {
align-items: end;
}
`
function Right() {
    const ActiveIndex = useSelector(state => state.contacts.activeIndex)
    const dispatch = useDispatch();
    const sessionMessages = useSelector(state => state.contacts.sessionMessages)
    const currentMessages = sessionMessages[ActiveIndex];


    const changeMessages = (text) => {
        dispatch(sendMessage({ActiveIndex , text}));    
    }
    return ( 
    <Container>
    <ChatHeader/>
        <MessageSpace>
        {currentMessages.length !==0 ?currentMessages.map((item) => {return (<Message key={item.id} type={item.type} text={item.message}/>)}):null}
        </MessageSpace>
    <SendInput changeMessages={changeMessages}/>
    </Container>);
}

export default Right;