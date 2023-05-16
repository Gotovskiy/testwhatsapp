import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
background-color: #f0f2f5;
width: 100%;
height: 49px;
min-height: 49px;
padding-top: 5px;
padding-bottom: 5px;
border-left: 1px solid #d1d7db;
display: flex;
align-items: center;
`
const ActiveContactAvatar = styled.img`
height: 49px;
width: 49px;
margin-left: 10px;
border: 3px solid #d1d7db;
border-radius: 30px;
`
const ActiveContactNumber = styled.span`
padding-left: 20px;
font-size: 16px;
`


function ChatHeader() {
    const savedContactsInfo = useSelector(state => state.contacts.savedContactsInfo)
    const activeIndex = useSelector(state => state.contacts.activeIndex)
    const Index = savedContactsInfo.findIndex(item => item.chatId === activeIndex)
    console.log(Index , activeIndex)
    return ( 
    <Container >
    <ActiveContactAvatar src={
        savedContactsInfo[Index].avatar.length > 0
        ?
        savedContactsInfo[Index].avatar 
        : 
        "./img/user_first.png"}/>
    <ActiveContactNumber>{savedContactsInfo[Index].name}</ActiveContactNumber>
    </Container> );
}

export default ChatHeader;