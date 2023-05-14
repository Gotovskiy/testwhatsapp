import React from 'react'
import styled from 'styled-components'
import Left from './Left/Left'
import Right from './Right/Right'

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

function App() {

  return (
    <Container>
           <Application>
            <Left/>
            <Right/>
           </Application>
    <Background>
    <BackgroundHead/>
    </Background>
    </Container>
  )
}

export default App
