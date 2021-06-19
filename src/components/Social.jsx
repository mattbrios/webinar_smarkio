import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';

const SocialContainer = styled.div`
  padding-top: 0.75rem;

  & svg {
    margin: 0 0.125rem;
    font-size: 2rem;
  }
`;

const Social = (props) => {
  const social = props.social;

  return (
    <SocialContainer>
      {social.facebook && (
        <a href={`https://facebook.com/${social.facebook}/`} target="_blank" rel="noreferrer">
          <FacebookIcon className="white-text" />
        </a>
      )}
      {social.linkedin && (
        <a href={`https://www.linkedin.com/in/${social.linkedin}/`} target="_blank" rel="noreferrer">
          <LinkedInIcon className="white-text" />
        </a>
      )}
      {social.instagram && (
        <a href={`https://instagram.com/${social.instagram}/`} target="_blank" rel="noreferrer">
          <InstagramIcon className="white-text" />
        </a>
      )}
      {social.github && (
        <a href={`https://github.com/${social.github}/`} target="_blank" rel="noreferrer">
          <GitHubIcon className="white-text" />
        </a>
      )}
      {social.twitter && (
        <a href={`https://twitter.com/${social.twitter}/`} target="_blank" rel="noreferrer">
          <TwitterIcon className="white-text" />
        </a>
      )}
      {social.youtube && (
        <a href={`https://www.youtube.com/channel/${social.youtube}/`} target="_blank" rel="noreferrer">
          <YouTubeIcon className="white-text" />
        </a>
      )}
      {social.reddit && (
        <a href={`https://www.reddit.com/r/${social.reddit}/`} target="_blank" rel="noreferrer">
          <RedditIcon className="white-text" />
        </a>
      )}
    </SocialContainer>
  );
};

export default Social;
