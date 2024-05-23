import axios from "axios";
import { useState } from "react";

const apiKey = 'a0ccedd96b5d452d368fe1d3001410e2'

export default function useMovies() {
    const [allMovies, setAllMovies] = useState([]);


async function getAllMovies() {
    try{
        const{ data } = await axios(`https://api.themoviedb.org/3/movie/11?api_key=${apiKey}`);
        setAllMovies(data.results);
    } catch (error) {
        console.log(error);
    }
}

  return {
    allMovies,
    getAllMovies
  }
}
