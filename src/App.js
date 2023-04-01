import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ContextData } from './context/ContextProvider.js'
import { GlobalStyles } from './global-styles/GlobalStyles.js'

import socketIO from 'socket.io-client'
const socket = socketIO.connect('http://localhost:8080')

import Home from './components/home/Home.js'
import ChatPage from './components/chat-page/ChatPage.js'

function App() {

  const { theme } = useContext(ContextData)

  return (
    <>
      <GlobalStyles theme={theme}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home socket={socket}/>} />
          <Route path="/chat-page" element={<ChatPage socket={socket}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App