import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { choseContact,} from "../../store/ContactSlice";

const Container = styled.div`
box-sizing: border-box;
width: 100%;
height: 72px;
min-height: 72px;
padding-right: 5px;
display: flex;
align-items: center;
cursor: pointer;
:hover {
    background-color: #f8f8f8
}
&.active {
    background-color: #f0f2f5;
}`
const ContactAvatar = styled.img`
width:49px;
height:49px;
margin-left: 10px;
border-radius: 30px;
border: 3px solid #d1d7db
`
const InfoBox = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
border-bottom: 2px solid #f0f2f5;
padding-left: 10px;
`

const ContactName = styled.div`
width: 100%;
height: auto;
font-size: 17px;
`
const ChatId = styled.span`
width: 100%;
height: 20px;
overflow: hidden;
font-size: 14px;
`

function ContactListItem({id}) {
    const dispatch = useDispatch();
    const {savedContactsInfo} = useSelector(state => state.contacts); 
    const Index = savedContactsInfo.findIndex(item => item.chatId === id)
    const activeIndex = useSelector(state => state.contacts.activeIndex);
    return (
    <Container
    key={id} 
    className={activeIndex == id? "active" : ""}
    onClick={() => {dispatch(choseContact(id))}}>
     <ContactAvatar 
     src={savedContactsInfo[Index].avatar.length > 0?
          savedContactsInfo[Index].avatar 
          : "./img/user_first.png"}/>
        <InfoBox>
        <ContactName>{savedContactsInfo[Index].name}</ContactName>
        <ChatId>{savedContactsInfo[Index].chatId}</ChatId>   
        </InfoBox>   
    </Container> 
    );
}

export default ContactListItem;