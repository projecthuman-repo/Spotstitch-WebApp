// src/context/GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [sent, setSent] = useState(false);
  const [mainEmail, setMainEmail] = useState();
  const [accPassword, setAccPassword] = useState();
  const [switchUser, setSwitchUser] = useState();

  return (
    <GlobalContext.Provider value={{ 
        sent, setSent,
        mainEmail, setMainEmail,
        accPassword, setAccPassword,
        switchUser, setSwitchUser
        }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
