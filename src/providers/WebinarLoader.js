import React from 'react';
import webinar from '../assets/webinar';

export const WebinarContext = React.createContext({});

export const WebinarProvider = ({ children }) => {

  return (
    <WebinarContext.Provider
      value={{
        webinar
      }}
    >
      {children}
    </WebinarContext.Provider>
  );
};

export const ContextWebinar = () => React.useContext( WebinarContext );