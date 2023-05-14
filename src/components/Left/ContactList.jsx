import styled from "styled-components";
import React, { useEffect, useId } from "react";
import ContactListItem from "./ContactListItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { UploadContacts } from "../../store/ContactSlice";
const Container = styled.div`
width: 100%;
height: 95%;
background-color: #ffffff;
overflow-y: auto;
display: flex;
flex-direction: column;
`
const NoContacts = styled.div`
width:100%;
height: 40px;
font-size: 14px;
` 


function ContactList() {
    const dispatch = useDispatch();
    const idinstance = "1101820260"; 
    const ApiTokenInstance = "7d514770abd246669d78fe7ca3f7f9f1e735e984e6a94be380"

    useEffect(() => {
      getContacts();  
      },[]);
      
const getContacts = async () => {
     await axios.get(`https://api.green-api.com/waInstance${idinstance}/getContacts/${ApiTokenInstance}`)
.then(res => dispatch(UploadContacts(res.data.slice(0 , 10))))
      }
      

    const contacts = useSelector(state => state.contacts.SavedContacts)
    return ( 
    <Container> 
     { contacts.length !=0 ?contacts.map(item => <ContactListItem id={item.id} key={item.id}phone={item.phone}/>): <NoContacts>You haven't contacts</NoContacts> }   
    </Container> );
}

export default ContactList;