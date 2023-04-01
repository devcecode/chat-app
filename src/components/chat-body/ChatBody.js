import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Socket } from 'socket.io-client'

import { ContextData } from '../../context/ContextProvider.js'

import {
  ChatBodyContainer, 
  ChatBodyStyled, 
  ChatBodyTitle,
  LeaveChat,
  Body,
  Header,
  Footer,
  Input,
  Button,
  InputContainer,
  MessageStatus,
  MessageContainer,
  UserMessage,
  Message,
  User,
  ProfilePicture,
  ProFilePictureContainer,
  Picture,
  UserName
} from './styles/chat-body.js'

function ChatBody({ socket }) {

  const navigate = useNavigate()
  const [ messages, setMessages ]         = useState([])
  const [ typingStatus, setTypingStatus ] = useState('')
  const [ messageInput, setMessageInput ] = useState('')
  const lastMessageRef = useRef(null);

  const { theme } = useContext(ContextData)

  const handleInputChange = e => setMessageInput(e.target.value)

  const handleTyping = e => socket.emit('typing', `${window.localStorage.getItem('current-user')} is typing...`)

  const sendMessage = e => {
    e.preventDefault()
    if (messageInput.trim() && localStorage.getItem('current-user')) {
      socket.emit('newMessage', {
        text: messageInput,
        name: window.localStorage.getItem('current-user'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      })
      setMessageInput('')
    }
  }

  useEffect(() => {
    socket.on('typingResponse', typingData => {
      setTypingStatus(typingData)
      setTimeout(() => {
        setTypingStatus('')
      }, 3000)
    })
  }, [ socket ])

  useEffect(() => {
    socket.on('newMessageResponse', message => {
      setMessages([...messages, message])
    })
  }, [ socket, messages ])

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Temporaly

  const handleLeaveChat = e => {
    e.preventDefault()
    socket.emit('leaveChat', {})
  }

  return (
    <ChatBodyStyled>
      <ChatBodyContainer>
        <Header background={theme.primaryBackground}>
          <ChatBodyTitle>Hongout Nice People</ChatBodyTitle>
          <User>
            <ProfilePicture></ProfilePicture>
            <UserName>{window.localStorage.getItem('current-user')}</UserName>
          </User>
          <LeaveChat onClick={handleLeaveChat}>LEAVE CHAT</LeaveChat>
        </Header>

        <Body>
          {
            messages.length > 0 && messages.map((m,i) => (
              m.name === window.localStorage.getItem('current-user') ? (
                <MessageContainer style={{marginLeft: 'auto', width: '300px'}} key={i}>
                  <UserMessage style={{textAlign: 'right'}}>You</UserMessage>
                  <Message style={{backgroundColor: '#c2f3c2'}}>{m.text}</Message>
                </MessageContainer>
              ) : (
                <MessageContainer style={{maxWidth: '300px'}} key={i}>
                  <UserMessage>{m.name}</UserMessage>
                  <Message style={{backgroundColor: '#f5ccc2', textAlign: 'right'}}>{m.text}</Message>
                </MessageContainer>
              )
            ))
          }

          <div ref={lastMessageRef}></div>
        </Body>

        <Footer
        background={theme.primaryBackground}>
          <InputContainer>
            <MessageStatus>
              { typingStatus }
            </MessageStatus>
            <Input
            border={theme.primaryBorder} 
            type="text"
            value={messageInput}
            onChange={handleInputChange}
            placeholder="Write Message"
            onKeyDown={handleTyping}
            />
          </InputContainer>
          <Button onClick={sendMessage}>SEND</Button>
        </Footer>
      </ChatBodyContainer>
    </ChatBodyStyled>
  )
}

export default ChatBody