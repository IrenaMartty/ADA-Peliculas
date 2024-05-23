import {Box, Button} from '@mui/material/';
import { blue } from '@mui/material/colors';

const buttonStyle = {
  color: 'white', 
  borderColor: 'white',
  margin: '4px'
}

export default function Header() {
  return (
    <Box margin={0} bgcolor="gray" padding={1}>
      <h1>ADA PELICULAS</h1>
      <Button variant="outlined" sx={buttonStyle}>HOME</Button>
      <Button variant="outlined" sx={buttonStyle}>ULTIMOS LANZAMIENTOS</Button>
      <Button variant="outlined" sx={buttonStyle}>POPULARES</Button>
      <Button variant="outlined" sx={buttonStyle}>BUSCAR</Button>
  </Box>
  )
}
