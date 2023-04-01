import React from 'react'
import { createRoot } from 'react-dom/client'

import { ContextProvider } from './context/ContextProvider.js'

import App from './App.js'
import './index.css'

createRoot(document.querySelector('#root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)