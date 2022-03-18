import React, { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  return (
    <FavoritesContext.Provider>{props.children}</FavoritesContext.Provider>
  );
};
