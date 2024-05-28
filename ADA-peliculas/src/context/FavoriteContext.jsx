import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const {getLocalStorage, updateLocalStorage } = useLocalStorage()

//Montaje
useEffect(()=> {
 setFavorites(getLocalStorage(favorites))
}, [])

//Actualizacion
useEffect(() => {
if (favorites != null) {
  localStorage.setItem("favorite", JSON.stringify(favorites))
} 
}, [favorites])

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
    <FavoriteContext.Provider value={data}>
      {children}
    </FavoriteContext.Provider>
    </>
  );
};

export default FavoriteContextProvider;