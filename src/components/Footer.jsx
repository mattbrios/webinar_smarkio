import React from 'react';
import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--footer);
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Typography variant="body1" className="white-text">
          Política de privacidade
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;