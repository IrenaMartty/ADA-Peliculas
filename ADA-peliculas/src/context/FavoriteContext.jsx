import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

// Agrega el favorito

    const addFavorites =(movie)=> {
      console.log(movie)
      setFavorites([...favorites,movie])
    }

    const data = {
      favorites,
      addFavorites
    }

    return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;