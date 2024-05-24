import React, { useEffect, useState } from 'react';
import useMovies from '../hooks/useMovies';
import { Box, Container, Grid } from '@mui/material';
import CardAllMovies from '../components/CardAllMovies';
import { useNavigate } from 'react-router-dom';

export default function ContainLatestMovies() {
  const { latestMovies, getLatestMovies} = useMovies()

  useEffect(() => {
    getLatestMovies();
  }, []);


  return (
    <Box sx={{ backgroundColor: "black", minHeight: "90vh", padding: 2 }}>
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
  )
}

