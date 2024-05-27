import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

// Agrega el favorito
    const addToFavorites =(movie)=> {
      // console.log(movie)
      setFavorites((favorites) => [...favorites, movie]);

    }

// Remove el favorito
const removeFromFavorites = (id) => {
  setFavorites((favorites) => favorites.filter((favorite) => favorite.id !== id));
};


const isFavorite = (movie) => {
  return favorites.some((fav) => fav.id === movie.id);
};

const allFavorites = () => {
  return favorites.length;
};

    const data = {
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      allFavorites

    }

    return (
    <>
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, allFavorites }}>
      {children}
    </FavoriteContext.Provider>
    </>
  );
};

export default FavoriteContextProvider;