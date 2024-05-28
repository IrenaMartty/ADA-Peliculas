import React, { useEffect, useState } from 'react';
import useMovies from '../hooks/useMovies';
import { Box, Container, Grid, Pagination } from '@mui/material';
import CardAllMovies from '../components/CardAllMovies';

export default function ContainPopularMovies() {
  const { popularMovies, getPopularMovies, page, changePage, totalPages} = useMovies()


  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(() => {
    getPopularMovies(page);
  }, [page, getPopularMovies]);

  

  return (
    <Box sx={{ backgroundColor: "black", minHeight: "90vh", padding: 2 }}>
      <Container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: '20px', marginTop: '100px' }}>
        <Grid container spacing={2}>
          {popularMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <CardAllMovies movie={movie} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined" 
            color="primary" 
            size="large"
          />
        </Box>
      </Container>
    </Box>
  )
}
