import React, { useContext } from 'react'

import { ContextData } from '../../context/ContextProvider.js'

import { HeaderContainer, HeaderStyled, Title } from './styles/header.js'

function Header() {

  const { theme } = useContext(ContextData)

  return (
    <HeaderStyled 
    background={theme.primaryBackground}
    border={theme.primaryBorder}>
      <HeaderContainer>
        <Title>❤️‍🔥 Big Chat</Title>
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header