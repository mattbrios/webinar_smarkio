import React from 'react'
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <HomeContainer>
          <Form />
        </HomeContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;