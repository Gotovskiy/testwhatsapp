import styled from "styled-components";
import React, { useId } from "react";
import ContactListItem from "./ContactListItem";
import { useSelector } from "react-redux";
const Container = styled.div`
width: 100%;
height: 95%;
background-color: #ffffff;
overflow-y: auto;
display: flex;
flex-direction: column;
`



function ContactList() {

    const Contacts = useSelector(state => state.contacts.SavedContacts)
    
    return ( 
    <Container>
     {Contacts.map(item => <ContactListItem id={item.id} avatar={item.avatar} phone={item.phone} message={item.message}/>)}   
    </Container> );
}

export default ContactList;