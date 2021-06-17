import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo-smk-white.svg';

const HeaderContainer = styled.header`
  padding: 1rem 0;
  text-align: center;
  border-bottom: 1px solid var(--text);

  & img {
    height: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Smarkio" />
    </HeaderContainer>
  )
}

export default Header;