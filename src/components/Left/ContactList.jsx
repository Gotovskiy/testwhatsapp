import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";
import { useDispatch, useSelector } from "react-redux";;
import {getContacts , getContactInfo, receiveMessage} from "../../store/ContactSlice";
const Container = styled.div`
width: 100%;
height: 95%;
background-color: #ffffff;
display: flex;
overflow: hidden;
flex-direction: column-reverse;
justify-content: start;
`
const AddedItems = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column-reverse;
margin: 0 auto;
margin-top: 15px;
overflow-y:auto;
overflow-x:hidden;
scrollbar-color: #0000008d;
scrollbar-width: none;
::-webkit-scrollbar {
    display:none ;
}

`
const NoContacts = styled.div`
width:100%;
height: 40px;
font-size: 14px;
` 


function ContactList() {
    const dispatch = useDispatch();
    const {savedContacts, savedContactsInfo, savedContactsInfoLoaded} = useSelector(state => state.contacts)
    const savedContactsLoaded = useSelector(state => state.contacts.savedContactsLoaded)
    const [load , setLoad] = useState(false);
    useEffect( () => {
      dispatch(getContacts())
    }, [])

    useEffect(() => {
      if(savedContactsLoaded){
        savedContacts.forEach(element => {
          dispatch(getContactInfo(element.id))
        });
      }
    }, [savedContactsLoaded])
    
    useEffect(() => {
      if(savedContactsInfoLoaded){
        setLoad(true);
        setInterval(() => {
          dispatch(receiveMessage())
        }, 10000);
      };
    }, [savedContactsInfoLoaded])




    return ( 
    <Container>
      <AddedItems>
      {load == true ? savedContactsInfo.map(item => <ContactListItem id={item.chatId} key={item.chatId}/>): <NoContacts>You haven't contacts</NoContacts> }
      </AddedItems>   
    </Container> );
}

export default ContactList;