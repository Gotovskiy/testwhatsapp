import styled from "styled-components";
import React, { useEffect, useId, useState } from "react";
import ContactListItem from "./ContactListItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {getContacts , getContactInfo, choseContact, receiveMessage} from "../../store/ContactSlice";
const Container = styled.div`
width: 100%;
height: 95%;
background-color: #ffffff;
overflow-y: hidden;
display: flex;
flex-direction: column-reverse;
justify-content: start;
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
        }, 5000);
      };
    }, [savedContactsInfoLoaded])




    return ( 
    <Container> 
     {load == true ? savedContactsInfo.map(item => <ContactListItem id={item.chatId} key={item.chatId}/>): <NoContacts>You haven't contacts</NoContacts> }   
    </Container> );
}

export default ContactList;