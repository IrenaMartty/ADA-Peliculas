import { useState } from "react";


export default function useLocalStorage(favoriteMovies) {

    const getLocalStorage = (favoriteMovies) => {
        
    const addLocalStorage = JSON.parse(localStorage.getItem(favoriteMovies)) || [];
    return favoriteMovies 
}



const updateLocalStorage = (favoriteMovies, data) => {
    localStorage.setItem(favoriteMovies, JSON.stringify(data))
}
        
  return {
    getLocalStorage,
    updateLocalStorage
  }
}
  

