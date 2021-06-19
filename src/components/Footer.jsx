import React from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import LogoW from '../assets/logo-smkd1_w.svg';
import { Link } from 'react-router-dom';
import Social from './Social';

const FooterContainer = styled.footer`
  background-color: var(--dark-bg);
  padding: 2rem 0;

  & img {
    width: 100%;
    max-width: 160px;
    margin-bottom: 0.5rem;
  }
`;

const Footer = () => {
  const matches = useMediaQuery('(max-width: 768px)');

  const socialSmk = {
    facebook: "smarkio",
    linkedin: "smarkio",
    instagram: "smarkio",
    github: "smarkio",
    twitter: "smarkio",
    youtube: "smarkio",
    reddit: "smarkio",
  }

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={6} xs={12}>
            <img src={LogoW} alt="Smarkio D1" />
            <Link to="/politica-de-privacidade">
              <Typography variant="caption" component="p" className="white-text upper">
                Política de privacidade
              </Typography>
            </Link>
          </Grid>
          <Grid item sm={6} xs={12} align={matches ? 'center' : 'right'}>
            <Social social={socialSmk} />
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;