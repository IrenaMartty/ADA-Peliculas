import {Box, Button} from '@mui/material/';
import { blue } from '@mui/material/colors';
import HomePage from '../../views/HomePage';
import ContainPopularMovies from '../../views/ContainPopularMovies';
import { Link } from 'react-router-dom';

const buttonStyle = {
  color: 'white', 
  borderColor: 'white',
  margin: '4px'
}

export default function Header() {
  return (
    <Box margin={0} bgcolor="gray" padding={1}>
      <h1>ADA PELICULAS</h1>
      <Button variant="outlined"  component= {Link} to="/" sx={buttonStyle}>HOME</Button>
      <Button variant="outlined" component= {Link} to="/latest" sx={buttonStyle}>ULTIMOS LANZAMIENTOS</Button>
      <Button variant="outlined" component= {Link} to="/popular" sx={buttonStyle}>POPULARES</Button>
      <Button variant="outlined" component= {Link} to="/search" sx={buttonStyle}>BUSCAR</Button>
  </Box>
  )
}
