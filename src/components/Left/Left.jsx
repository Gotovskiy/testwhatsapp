import React from "react";
import styled from "styled-components";
import UserHeader from "./UserHeader";
import AddContactPanel from "./AddContactPanel";
import ContactList from "./ContactList";

const Container = styled.div`
    flex: 30%;
    display: flex;
    flex-direction: column;
`

function Left() {
    return (
    <Container>
     <UserHeader/>
     <AddContactPanel/>
     <ContactList/>   
    </Container>
    );
}

export default Left;