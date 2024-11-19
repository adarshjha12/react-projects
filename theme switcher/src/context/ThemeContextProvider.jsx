import React from 'react';
import ThemeContext from './Theme';

function ThemeContextProvider({ children, value }) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
