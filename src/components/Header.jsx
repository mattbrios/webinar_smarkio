import React from 'react';
import { Container, IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo-smkd1.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: var(--header);
  box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.15);
  width: 100%;
  position: absolute;
  top: 0;
  /* text-align: center; */

  & img {
    height: 2rem;
  }
  @media screen and (max-width: 768px) {
    & img {
      height: 1.5rem;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Header = (props) => {
  let history = useHistory();

  const backHandler = () => {
    history.push('/');
  }

  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          {props.back && (
            <IconButton size="small" component="span" onClick={backHandler}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <LogoContainer>
            <Link to="/" align="center">
              <img src={Logo} alt="Smarkio" />
            </Link>
          </LogoContainer>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header;