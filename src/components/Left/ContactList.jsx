import styled from "styled-components";
import { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";
import { useDispatch, useSelector } from "react-redux";
import {getContacts , getContactInfo, receiveMessage} from "../../store/ContactSlice";
const Container = styled.div`
width: 100%;
height: 100%;
background-color: #ffffff;
display: flex;
overflow: hidden;
justify-content: end;
`
const AddedItems = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
margin: 0 auto;
overflow-y:auto;
overflow-x:hidden;
scrollbar-color: #0000008d;
scrollbar-width: none;
::-webkit-scrollbar {
    display:none ;
}

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
      }
    }, [savedContactsInfoLoaded])




    return ( 
    <Container>
      <AddedItems>
      {load == true ? savedContactsInfo.slice(0).reverse().map(item => <ContactListItem id={item.chatId} key={item.chatId}/>): null }
      </AddedItems>   
    </Container> );
}

export default ContactList;