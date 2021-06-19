import React from 'react'
import { Container, Grid } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import styled from 'styled-components';
import BannerData from '../../components/BannerData';
import Participants from '../../components/Participants';
import WhatDoes from '../../components/WhatDoes';

const HomeContainer = styled.div`
  background: var(--bg);
  padding: 6rem 0;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item sm={7} xs={12}>
              <BannerData />
            </Grid>
            <Grid item sm={5} xs={12}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </HomeContainer>
      <Participants />
      <WhatDoes />
      <Footer />
    </div>
  );
};

export default Home;