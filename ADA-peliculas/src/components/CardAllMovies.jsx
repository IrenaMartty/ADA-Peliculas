import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CardAllMovies({ movie }) {
  const [favourite, setFavourite] = useState (false)

  const handleFavouriteClick = () => {
    setFavourite ((favourite) => !favourite)
  }


  return (
    <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
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
          <IconButton onClick={(e) => { e.stopPropagation(); handleFavouriteClick(); }}>
            {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardContent>
      </Card>
    </Link>
  );
}
