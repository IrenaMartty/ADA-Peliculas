import { useEffect } from "react"
import useMovies from "../hooks/useMovies"
import { Box, Container, Grid } from "@mui/material";
import CardAllMovies from "../components/CardAllMovies"
import { useNavigate } from "react-router-dom";


export default function HomePage() {
const navigate = useNavigate()
const { allMovies, getAllMovies} = useMovies();  

useEffect(() => {
    getAllMovies()
}, [])

return (
    <Box sx={{ backgroundColor: "blue", minHeight: "90vh" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {allMovies.map((movie) => (
            <CardAllMovies key={movie.id} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
