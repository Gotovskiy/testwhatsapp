import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChoseContact } from "../../store/ContactSlice";

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

function ContactListItem({avatar,phone,id,message}) {
    const dispatch = useDispatch();
    const activeIndex = useSelector(state => state.contacts.ActiveIndex)
    const SavedContacts = useSelector(state => state.contacts.SavedContacts)
    return ( 
    <Container className={id==SavedContacts[activeIndex].id?"active":""} key={id} onClick={() => dispatch(ChoseContact(id))}>
     <ContactAvatar src={avatar}/>
        <InfoBox>
         <Number>{phone}</Number>
         <Message>{message}</Message>   
        </InfoBox>   
    </Container> 
    );
}

export default ContactListItem;