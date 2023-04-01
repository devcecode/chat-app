import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContextData } from '../../context/ContextProvider.js'

import { 
  Form, 
  FormElement, 
  HomeContainer,
  HomeStyled, 
  IconContainer, 
  Input, 
  InputContainer 
} from './styles/home.js'

function Home({ socket }) {

  const navigate = useNavigate()

  const { theme } = useContext(ContextData)

  const [ inputValue, setInputValue ] = useState('')

  const handleInputChange = e => setInputValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    window.localStorage.setItem('current-user', inputValue)
    socket.emit('newUser', { userName: inputValue, socketId: socket.id })
    navigate('/chat-page')
  }
  
  return (
    <HomeStyled background={theme.primaryBackground}>
      <HomeContainer>
        <h2 style={{marginBottom: '1.5em', fontFamily: 'Product Sans', textAlign: 'center'}}>❤️‍🔥 Join to Big Chat</h2>
        <Form onSubmit={handleSubmit}>
          <FormElement>
            <label htmlFor="new-user" style={{textAlign: 'center', display: 'block', width: '100%', marginBottom: '.5em', fontFamily: 'Product Sans'}}>username:</label>
            <InputContainer>
              <Input 
              type=""
              value={inputValue}
              placeholder="Enter a username"
              onChange={handleInputChange}
              border={theme.primaryBorder}
              focusBorder={theme.secondaryBorder}
              id="new-user"
              autoComplete='off'
              spellCheck={false}
              />

              <IconContainer 
              color={theme.primaryBorder}
              hoverColor={theme.secondaryBorder}
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </IconContainer>
            </InputContainer>

          </FormElement>
        </Form>
      </HomeContainer>
    </HomeStyled>
  )
}

export default Home