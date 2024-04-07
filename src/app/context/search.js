"use client";

import { createContext, useContext, useState } from "react";

// create context
export const SearchContext = createContext();

// provider
export const SearchContexProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

// hooks
export const useSearchContext = () => useContext(SearchContext);
