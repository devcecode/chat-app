import React, { useEffect, useState } from 'react'

import ChatBar from '../chat-bar/ChatBar.js'
import ChatBody from '../chat-body/ChatBody.js'

import { 
  ChatPageContainer, 
  ChatPageStyled, 
  Left,
  Right
} from './styles/chat-page.js'

function ChatPage({ socket }) {

  return (
    <ChatPageStyled>
      <ChatPageContainer>
          <ChatBar socket={socket} />
          <ChatBody socket={socket} />
      </ChatPageContainer>
    </ChatPageStyled>
  )
}

export default ChatPage