import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChoseContact, UptadeUserInfo } from "../../store/ContactSlice";
import { useEffect } from "react";
import axios from "axios";
const Container = styled.div`
box-sizing: border-box;
width: 100%;
height: 72px;
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
padding-left: 10px;
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

const Number = styled.div`
width: 100%;
height: auto;
font-size: 17px;
`
const Message = styled.span`
width: 100%;
height: 20px;
overflow: hidden;
font-size: 14px;
`

function ContactListItem({phone,id,message}) {
    const dispatch = useDispatch();
    const activeIndex = useSelector(state => state.contacts.ActiveIndex)
    const SavedContacts = useSelector(state => state.contacts.SavedContacts);
    const itemIndex = SavedContacts.findIndex(item => item.id === id)

    const idinstance = "1101820260";
    const ApiTokenInstance = "7d514770abd246669d78fe7ca3f7f9f1e735e984e6a94be380"
    
    useEffect(() => {
        getFullInfo();  
        },[]);
        
  const getFullInfo = async () => {
       await axios.post(`https://api.green-api.com/waInstance${idinstance}/GetContactInfo/${ApiTokenInstance}`, {chatId: id})
  .then(res => {{dispatch(UptadeUserInfo(res.data))}})
        }
    return ( 
    <Container 
    className={activeIndex !== null && id==SavedContacts[activeIndex].id?"active":""} 
    key={id} 
    onClick={() => dispatch(ChoseContact(id))}>
     <ContactAvatar src={SavedContacts[itemIndex].fullinfo!=undefined && SavedContacts[itemIndex].fullinfo.avatar.lenght > 0 ? SavedContacts[itemIndex].fullinfo.avatar:"./img/user_first.png"}/>
        <InfoBox>
         <Number>{phone}</Number>
         <Message>{message}</Message>   
        </InfoBox>   
    </Container> 
    );
}

export default ContactListItem;