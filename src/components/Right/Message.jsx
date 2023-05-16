import React from "react";
import styled from "styled-components";

const Container = styled.li`
width: 100%;
max-height: 700px;
display: flex;
flex-direction: column;
&.send {
align-items: end;
margin-right: 15px;
}
&.received{
margin-left: 15px;
align-items: start;
justify-content: start;
&>* {
background-color: rgb(99, 166, 230) ;
}
}
`
const TextBox = styled.div`
display: flex;
list-style: none;
border: none;
font-size: 14px;
max-width: 300px;
max-height: 500px;
background-color: rgb(131, 238, 145);
text-align: left;
margin-bottom: 10px;
margin-right: 10px;
border-radius:20px;
padding-right: 10px;
padding-left: 10px;
padding-bottom: 10px;
padding-top: 8px;
white-space: normal; 
`


function Message({type , text}) {
    
    return ( 
        <Container className={type} >
         <TextBox  readOnly={true}>{text}</TextBox>
        </Container>
     );
}

export default Message;