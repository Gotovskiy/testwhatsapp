import React from 'react'
import styled from 'styled-components'
import Left from './Left/Left'
import Right from './Right/Right'
import { useSelector } from 'react-redux'
const Container = styled.div`
 position: relative;
 height: 100vh;
 width: 100vw;
 display: flex;
`
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eae6df;
  z-index: -1;
  position: fixed;
  top: 0;
`
const BackgroundHead = styled.div`
  width: 100vw;
  height: 127px;
  background-color: #00A884;
`
const Application = styled.div`
  position: absolute;
  top:19px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%);
  z-index: 200;
  width: calc(100% - 38px);
  height: calc(100% - 38px);
  max-width: 1600px;
  display: flex;
`
const NoActivePage = styled.div`
    flex: 70%;
    height: 100%;
    background-color: #f0f2f5;
    border-left: 1px solid #e9edef;
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
  const ActiveIndex = useSelector(state => state.contacts.ActiveIndex);

  return (
    <Container>
           <Application>
            <Left/>
            { ActiveIndex != null ? <Right/> : <NoActivePage>Chose contact</NoActivePage> }
           </Application>
    <Background>
    <BackgroundHead/>
    </Background>
    </Container>
  )
}

export default App
