import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTokenAndId } from "../store/ContactSlice";

const Container = styled.div`
    
`
const Background = styled.div`
     display: flex;
  position: fixed;
  top: 0;
  background-color: #efebe4;
  background-image: url(../img/background.jpg);
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  filter: blur(10px);   
`
const LoginForm = styled.div`
   display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 40vw;
  min-width: 400px;
  border-radius: 4px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 20px #8696a0a5;   
`
const Title = styled.h1`
      margin: 31px auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #424242;
`
const Paragraph = styled.p`
    
`
const Input = styled.input`
  width: 35vw;
  height: 46px;
  border: 1px solid #C9CACC;
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;  
`
const LoginBtn = styled.button`
  width: 36vw;
  height: 50px;
  background: #347f69;
  border: 0;
  border-radius: 25px;
  margin: 15px auto;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  cursor: pointer;
`
function ModalWindow({loadLogin}) {
    const [idInstance , setId] = useState("");
    const [apiTokenInstance , setToken] = useState("");
    const dispatch = useDispatch();
    const enterService = () => {
        if (idInstance.length > 0 && apiTokenInstance.length > 0){
        dispatch(addTokenAndId({idInstance,apiTokenInstance}))
        loadLogin();}

    }
    return (
      <Container>
        <Background />
        <LoginForm>
          <Title> Введите ваши данные </Title>
          <Paragraph>Получить данные можно по <a href="https://green-api.com/">ссылке</a>.</Paragraph>
          <Input
            type="text"
            placeholder="idInstance"
            value={idInstance}
            onChange={(e) => (setId(e.target.value))}
          />
          <Input
            type="text"
            placeholder="apiTokenInstance"
            value={apiTokenInstance}
            onChange={(e) => (setToken(e.target.value))}
          />
          <LoginBtn onClick={() => (enterService())}>Войти</LoginBtn>
        </LoginForm>
      </Container>
    );
  }
  
  export default ModalWindow;