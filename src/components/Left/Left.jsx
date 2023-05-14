import React from "react";
import styled from "styled-components";
import UserHeader from "./UserHeader";
import SearchPanel from "./SearchPanel";
import ContactList from "./ContactList";

const Container = styled.div`
    flex: 30%;
    background-color: #f0f2f5;
    display: flex;
    flex-direction: column;
`

function Left() {
    return (
    <Container>
     <UserHeader/>
     <SearchPanel/>
     <ContactList/>   
    </Container>
    );
}

export default Left;