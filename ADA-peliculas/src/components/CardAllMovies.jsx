import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function CardAllMovies({ movie }) {
  const [favourite, setFavourite] = useState (false)

  const handleFavouriteClick = () => {
    setFavourite ((favourite) => !favourite)
  }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <IconButton onClick={handleFavouriteClick}>
        {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}

        </IconButton>

        {/* <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography> */}
      </CardContent>
    </Card>
  );
}