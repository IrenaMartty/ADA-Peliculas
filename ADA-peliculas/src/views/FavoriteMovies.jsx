import { Grid, Container, Box } from "@mui/material";
import { useContext } from "react";
import CardAllMovies from "../components/CardAllMovies";
import FavoritesContextProvider from "./context/FavoritesContext";

export default function FavoriteMovies() {
  const { favorites } = useContext(FavoritesContextProvider);

  return (
    <Box sx={{ backgroundColor: "black", minHeight: "90vh", padding: 2 }}>
      <Container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Grid container spacing={2}>
          {favorites.map((favorite) => (
            <Grid item key={favorite.id} xs={12} sm={6} md={4} lg={3}>
              <CardAllMovies movie={favorite} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}