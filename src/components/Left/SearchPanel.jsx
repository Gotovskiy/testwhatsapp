import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
width: 100%;
height: 48px;
min-height: 48px;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
`
const SearchBox = styled.div`
width: 90%;
height: 35px;
background-color: #f0f2f5;
border: none;
border-radius: 10px;
padding-left:15px;
display: flex;
align-items: center;
`

const SearchIconBox = styled.div`
height:100%;
height: 24px;
width: 24px;
display: flex;
align-items: center;
padding-right: 8px;
`
const SearchInput = styled.input`
border: none;
background-color: #f0f2f5;
height: 80%;
width: 85%;
list-style: none;
`

function SearchPanel() {
    return ( 
    <Container>
        <SearchBox>
        <SearchIconBox>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconBox>
        <SearchInput placeholder="Поиск или новый чат"/>
        </SearchBox>
    </Container> );
}

export default SearchPanel;