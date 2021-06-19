import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography } from '@material-ui/core';
import Social from './Social';

const PersonConatainer = styled.div`
  text-align: center;
`;
const CustomAvatar = styled(Avatar)`
  width: 100% !important;
  height: 100% !important;
  max-width: 16rem !important;
  max-height: 16rem !important;

  border: 10px solid var(--light-blue);
  margin: 1rem auto;

  @media screen and (max-width: 768px) {
    border: 6px solid var(--light-blue);
  }
`;

const Person = ({data}) => {
  return (
    <PersonConatainer>
      <CustomAvatar alt={data.name} src={data.image} />
      <Typography variant="h5" className="white-text" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="body1" className="lighterblue-text">
        {data.occupation}
      </Typography>
      <Typography variant="body2" className="lightblue-text upper" gutterBottom>
        {data.company}
      </Typography>
      <Social social={data.social}/>
    </PersonConatainer>
  );
};

export default Person;