import React from 'react';
import styled from 'styled-components';
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ImageWebinar from '../assets/webinar.svg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ScrollTo from 'scroll-to-element';

const WhatDoesContainer = styled.div`
  padding: 4rem 0;
  background: var(--bg);

  & hr {
    border: none;
    border-top: 2px solid var(--light-blue);
    max-width: 8rem;
    margin: 1rem auto;
  }
`;

const ItemList = ({children}) => {
  return(
    <ListItem alignItems="flex-start">
      <ListItemIcon>
        <CheckCircleIcon fontSize="large" className="green-text" />
      </ListItemIcon>
      <ListItemText primary={children} />
    </ListItem>
  );
}
const WhatDoes = () => {

  const buttonHandler = (event) => {
    console.log("FUI CLICADO");

    ScrollTo('#formContainer', {
        duration: 500
    });

    setTimeout(() => {
      document.getElementById("namefield").focus();
    }, 600);
  };

  return (
    <WhatDoesContainer>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item sm={12} xs={12}>
            <Typography variant="h4" className="blue-text upper italic" align="center" gutterBottom>
              Webinar. O que é e por que participar?
            </Typography>
            <hr />
          </Grid>
          <Grid item sm={6} xs={12}>
            <img src={ImageWebinar} alt="Webinar. O que é e por que participar?" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <List>
              <ItemList>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In quis urna ipsum. Sed sodales elementum leo in ultrices. 
                Fusce vulputate fringilla tincidunt.
                Aenean a risus lorem. Integer porttitor arcu eu tristique facilisis. 
                Pellentesque finibus nisl sit amet libero iaculis, eu auctor dolor ultrices. 
                Proin id aliquam lorem. Cras ac efficitur quam, ut egestas est. 
                Duis pretium fringilla convallis.
              </ItemList>
              <ItemList>
                Aenean a risus lorem. Integer porttitor arcu eu tristique facilisis. 
                Pellentesque finibus nisl sit amet libero iaculis, eu auctor dolor ultrices. 
                Proin id aliquam lorem. Cras ac efficitur quam, ut egestas est. 
              </ItemList>
              <ItemList>
                Consectetur adipiscing elit. 
                In quis urna ipsum. Sed sodales elementum leo in ultrices. 
                Aenean a risus lorem. Integer porttitor arcu eu tristique facilisis. 
                Pellentesque finibus nisl sit amet libero iaculis, eu auctor dolor ultrices.
              </ItemList>
            </List>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              style={{ padding: "1rem 0" }}
              onClick={buttonHandler}
            >
              Me inscrever
            </Button>
          </Grid>
        </Grid>
      </Container>
    </WhatDoesContainer>
  );
};

export default WhatDoes;
