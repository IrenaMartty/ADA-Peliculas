import React, { useEffect } from 'react';
import useMovies from '../hooks/useMovies';
import { Box, Container, Grid, Typography } from '@mui/material';
import CardAllMovies from '../components/CardAllMovies';
import Carusel from "../components/Carusel";



export default function HomePage() {
  
  const { popularMovies, getPopularMovies, latestMovies, getLatestMovies } = useMovies();
 

  useEffect(() => {
    getPopularMovies();
    getLatestMovies();
  }, []);

  return (
    <>    
    <Box sx={{ backgroundColor: "black", minHeight: "90vh"}}>
    <Carusel/>
    <Typography variant="h3" sx={{ color: "white", mb: 2, padding: 2 }}>Peliculas Populares</Typography>
      <Container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Grid container spacing={2}>
          {popularMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <CardAllMovies movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    <Box sx={{ backgroundColor: "gray", minHeight: "90vh", padding: 2 }}>
   <Typography variant="h3" sx={{ color: "white", mb: 2 }}>Peliculas Mejor Puntadas
</Typography>

      <Container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Grid container spacing={2}>
          {latestMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <CardAllMovies movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    </>
  );
}