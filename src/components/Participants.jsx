import React from 'react';
import { ContextWebinar } from '../providers/WebinarLoader';
import styled from 'styled-components';
import { Box, Container, Grid } from '@material-ui/core';
import Person from './Person';
import { Typography } from '@material-ui/core';

const CastContainer = styled.div`
  background: var(--dark-blue);
  padding: 4rem 0;

  & hr {
    border: none;
    border-top: 2px solid var(--light-blue);
    max-width: 8rem;
    margin: 1rem auto;
  }
`;

const Participants = () => {
  const { webinar } = ContextWebinar();

  const calcGrid = (numberOfParticipants) => {
    if ( numberOfParticipants % 3 === 0 ) {
      return 4;
    }
    else if ( numberOfParticipants > 3  ) {
      return 3;
    } else {
      return 6;
    }
  }

  return (
    <CastContainer>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Typography variant="h4" className="white-text upper italic" align="center">
              Veja quem vai estar neste webinar
            </Typography>
            <hr />
          </Grid>
          {webinar.cast.map( (participant, index) => (
            <Grid item sm={calcGrid(webinar.cast.length)} xs={6} key={'cast' + index}>
              <Person data={participant} />
            </Grid>
          ))}
          <Grid item sm={12} xs={12}>
            <Box mt={2} />
          </Grid>
        </Grid>
      </Container>
    </CastContainer>
  );
};

export default Participants;
