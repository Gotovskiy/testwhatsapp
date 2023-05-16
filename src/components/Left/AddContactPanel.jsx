import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { getContactInfo , choseContact, addSingleContact} from "../../store/ContactSlice";
const Container = styled.div`
width: 100%;
height: 48px;
min-height: 48px;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
`
const AddBox = styled.div`
width: 90%;
height: 35px;
background-color: #f0f2f5;
border: none;
border-radius: 10px;
padding-left:15px;
display: flex;
align-items: center;
`

const AddIconBox = styled.div`
height:100%;
height: 24px;
width: 24px;
display: flex;
align-items: center;
padding-right: 8px;
cursor: pointer;
`
const AddInput = styled.input`
border: none;
background-color: #f0f2f5;
height: 80%;
width: 85%;
outline: none;
`

function AddContactPanel() {
    const [inputValue , setValue] = useState();
    const dispatch = useDispatch();
const addNewContact = async () => {
    if (inputValue[0] == "7"){
    const true_str = inputValue + "@c.us";
    await dispatch(getContactInfo(true_str))
    await dispatch(addSingleContact(true_str));}
    else return;
}

    return ( 
    <Container>
        <AddBox>
        <AddIconBox>
        <FontAwesomeIcon icon={faPlus} onClick={() => addNewContact()} />
        </AddIconBox>
        <AddInput value={inputValue} onChange={(e) => setValue(e.target.value)} placeholder="Новый чат / 79966175980"/>
        </AddBox>
    </Container> );
}

export default AddContactPanel;