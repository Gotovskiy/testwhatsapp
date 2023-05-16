import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
background-color: #f0f2f5;
width: 100%;
height: 62px;
min-height: 49px;
padding-top: 5px;
padding-bottom: 5px;
border-left: 1px solid #d1d7db;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const MessageInput = styled.input`
border: none;
background-color: #ffffff;
min-height: 20px;
padding: 9px 12px;
margin: 0 auto;
width: 85%;
font-size: 15px;
list-style: none;
border-radius: 10px;
`
const SendBtn = styled.button`
margin-right: auto ;
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
`

function SendInput({changeMessages}) {
    const [inputText , setInputText] = useState("")
   const handleValueChange = (event) => {
        setInputText(event.target.value);
      };

    return ( 
        <Container>
        <MessageInput placeholder="Введите сообщение" value={inputText} onChange={(e) => handleValueChange(e)}/>
        <SendBtn onClick={() => {changeMessages(inputText) , setInputText("")}}>
        <FontAwesomeIcon icon={faPaperPlane} />
        </SendBtn>    
        </Container>
     );
}

export default SendInput;