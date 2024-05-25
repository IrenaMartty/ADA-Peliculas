import { useState, useEffect } from "react"
import useMovies from "../hooks/useMovies"
import CardAllMovies from '../components/CardAllMovies'
import { Grid } from "@mui/material"


export default function SearchMovies() {
  const [search, setSearch] = useState('')
  const {allMovies, findMovies} = useMovies()

  useEffect (() => {
    findMovies(search)}, [search]
  )

  return (
    <>
    <div>
      <input 
      type="text"
      placeholder="Ingresa el nombre de la pelicula"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
    </div>
    <div>
      {allMovies.map((movie)=> (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
        <CardAllMovies movie={movie} />
      </Grid>
      ))}
    </div>
    </>
  )
}
