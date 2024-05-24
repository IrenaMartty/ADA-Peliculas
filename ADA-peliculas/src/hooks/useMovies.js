import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = 'a0ccedd96b5d452d368fe1d3001410e2';

export default function useMovies() {
  const [popularMovies, setpopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([])

  async function getPopularMovies() {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      setpopularMovies(data.results); 
    } catch (error) {
      console.log(error);
    }
  }

  async function getLatestMovies() {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
      setLatestMovies(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPopularMovies();
    getLatestMovies();
  }, []);



  return {
    popularMovies,
    getPopularMovies,
    latestMovies,
    getLatestMovies


  }
}