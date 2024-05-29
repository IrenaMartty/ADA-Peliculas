import { Box } from '@mui/material'
import React from 'react'

export default function Error() {
  return (

    <Box
    sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    }}
    
    >
        <img src="./assets/finding-nemo.png" alt="error" style={{maxWidth: '100%',
    marginBottom: 2}}/>
         
         <Typography variant="h2" align="center">
            404
        </Typography>
        <Typography variant="body1" align="center">
            Pagina no encontrada
        </Typography>


    </Box>


   
  )
}
