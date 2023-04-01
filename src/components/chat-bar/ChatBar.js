import React, { useContext, useEffect, useState } from 'react'

import { ContextData } from '../../context/ContextProvider.js'

import Header from '../header/Header.js'
import { 
  ChatBarContainer, 
  ChatBarStyled, 
  User, 
  Users
} from './styles/chat-bar.js'

function ChatBar({ socket }) {

  const { theme } = useContext(ContextData)

  const [ users, setUsers ] = useState([])

  useEffect(() => {
    socket.on('newUserResponse', users => {
      setUsers(users)
    })
  }, [ socket, users ])

  // Temporaly
  
  useEffect(() => {
    socket.on('removeUsersResponse', users => {
      setUsers(users)
      window.localStorage.removeItem('current-user')
      navigate('/')
    })
  }, [ socket, users ])
  
  return (
    <ChatBarStyled 
    border={theme.primaryBorder} 
    background={theme.primaryBackground}>
      <ChatBarContainer>
        <Header />
        <h3 style={{marginBottom: '1em', fontFamily: 'Product Sans', fontSize: '1em'}}>ACTIVE USERS</h3>
        <Users>
          {
            users.length > 0 && users.map((u, i) => (
              <User key={i}>
                {u.userName}
              </User>
            ))
          }
        </Users>
      </ChatBarContainer>
    </ChatBarStyled>
  )
}

export default ChatBar