import React from 'react'
import { Container, NavBar, Icon } from './styles'
import { MdHome } from 'react-icons/md'

const Header = () => {
  return (
    <Container>
      <NavBar>
        <Icon>
          <MdHome size={40} color="#FFF" />
        </Icon>
      </NavBar>
    </Container>
  )
}

export default Header
