import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { Container, Typography, Box, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function DetailMovies() {
  const { idMovie } = useParams();
  const { movieDetails, getMovieDetails } = useMovies();
  const { trailer, getTrailer } = useMovies();
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    getMovieDetails(idMovie);
    getTrailer(idMovie).then((trailerData) => {
      if (trailerData && trailerData.key) {
        setTrailerKey(trailerData.key);
      } else {
        setTrailerKey(null);
      }
    });
  }, [idMovie, getMovieDetails, getTrailer]);

  console.log(getTrailer);
  if (!movieDetails) return <div>Cargando...</div>;
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        textAlign: 'left',
      }}
    >
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '50px',
      }}>
        <Box sx={{ flex: '0 0 auto', marginRight: { xs: 0, md: '50px' }, marginBottom: { xs: '20px', md: 0 } }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
          />
          {trailerKey && (
            <IconButton
              color='inherit'
              aria-label='trailer'
              onClick={() => window.open(`https://www.youtube.com/watch?v=${trailerKey}`, '_blank')} 
              sx={{ position: 'absolute', bottom: '20px', right: '20px' }}
            >
              <PlayCircleOutlineIcon fontSize="large" />
            </IconButton>
          )}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {movieDetails.title}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {movieDetails.overview}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}