import React from 'react';
import { Typography } from '@material-ui/core';
import { ContextWebinar } from '../providers/WebinarLoader';
import styled from 'styled-components';
import timestampToDate from '../helpers/TimestampToDate';

const ImageBanner = styled.div`
  width: 100%;
  text-align: center;

  & img {
    width: 100%;
    max-width: 520px;
  }
`;

const DateContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: var(--date-bg);
  border-radius: 0.5rem;
  display: inline-block;
  margin-top: 1rem;
`;

const BannerData = () => {
  const { webinar } = ContextWebinar();

  return (
    <>
      <Typography component="h2" variant="h4" className="altuwebinar" gutterBottom>
        Altu <span>Webinar</span>
      </Typography>
      <Typography component="h1" variant="h3" className="black-text bold-text">
        {webinar.title}
      </Typography>
      <DateContainer>
        <Typography component="span" variant="h5" className="dateblue-text rubik-medium">
          {timestampToDate(webinar.eventDate, false, " de ", "dayMonth").toLocaleLowerCase()}
          {" - "}
          {webinar.hour}
        </Typography>
      </DateContainer>
      <ImageBanner>
        <img src={webinar.image} alt={webinar.title} />
      </ImageBanner>
    </>
  );
};

export default BannerData;