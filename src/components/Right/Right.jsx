import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import SendInput from "./SendInput";

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
height:100%;
width: 100%;
`

function Right() {
    return ( 
    <Container>
    <ChatHeader/>
    <MessageSpace/>
    <SendInput/>
    </Container>);
}

export default Right;