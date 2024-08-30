'use client';
import React, { createContext, useState } from 'react';

export const UtilityCons = createContext();

const utilityprovider = ({ children }) => {
  const [chatBot, setChatBot] = useState(false);
  return (
    <UtilityCons.Provider value={{ chatBot, setChatBot }}>
      {children}
    </UtilityCons.Provider>
  );
};

export default utilityprovider;
