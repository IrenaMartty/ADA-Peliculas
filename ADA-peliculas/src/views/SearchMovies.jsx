import { useState, useEffect } from "react"
import useMovies from "../hooks/useMovies"
import CardAllMovies from '../components/CardAllMovies'
import { Grid } from "@mui/material"
import { Container, Typography, Box, IconButton} from "@mui/material";

export default function SearchMovies() {
  const [search, setSearch] = useState('')
  const {allMovies, findMovies} = useMovies()

  useEffect (() => {
    findMovies(search)}, [search]
  )

  return (
    <>
    <Box sx={{ backgroundColor: "black", minHeight: "90vh", padding: 2 }}>
      <input 
      type="text"
      placeholder="Ingresa el nombre de la pelicula"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      style={{ width: '100%', padding: '10px', marginBottom: '20px', marginTop: '100px'}}
      />
    
    <Container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      {allMovies.map((movie)=> (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
        <CardAllMovies movie={movie} />
      </Grid>
      ))}
    </Container>
    </Box>
    </>
  )
}
