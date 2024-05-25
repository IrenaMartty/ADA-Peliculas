import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useMovies from '../hooks/useMovies';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Carusel(movie) {
    const [index, setIndex] = useState(0);
    const { popularMovies, getPopularMovies} = useMovies()

    useEffect(() => {
      getPopularMovies();
  }, []);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {popularMovies.map((movie) => (
              <Carousel.Item key={movie.id} style={{
              width: '100%',
              objectFit: 'cover'}}>
                  <img
                      className="d-block w-100"
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title}
                  />
                  <Carousel.Caption style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                            padding: '10px',
                            borderRadius: '5px'
                        }}>
                      <h3>{movie.title}</h3>
                      <p>{movie.overview}</p>
                  </Carousel.Caption>
              </Carousel.Item>
          ))}
      </Carousel>
  );
}

