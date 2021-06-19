import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo-smkd1.svg';

const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: var(--header);
  box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.15);
  width: 100%;
  position: absolute;
  top: 0;
  text-align: center;

  & img {
    height: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link to="/">
          <img src={Logo} alt="Smarkio" />
        </Link>
      </Container>
    </HeaderContainer>
  )
}

export default Header;