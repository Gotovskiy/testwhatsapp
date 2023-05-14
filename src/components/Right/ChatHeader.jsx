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
padding-left: 10px;
`
const ActiveContactNumber = styled.span`
padding-left: 20px;
font-size: 16px;
`


function ChatHeader() {
    const Contacts = useSelector(state => state.contacts.SavedContacts)
    const ActiveIndex = useSelector(state => state.contacts.ActiveIndex)
    return ( 
    <Container >
    <ActiveContactAvatar src={Contacts[ActiveIndex].avatar}/>
    <ActiveContactNumber>{Contacts[ActiveIndex].phone}</ActiveContactNumber>
    </Container> );
}

export default ChatHeader;