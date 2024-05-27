import { Box, Button, Badge } from "@mui/material/";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";

const buttonStyle = {
  color: "white",
  borderColor: "white",
  margin: "4px",
};

export default function Header() {
  const navigate = useNavigate();

  const { allFavorites } = useContext(FavoriteContext);
  return (
    <Box margin={0} bgcolor="gray" padding={1}>
      <h1>ADA PELICULAS</h1>
      <Button variant="outlined" component={Link} to="/" sx={buttonStyle}>
        HOME
      </Button>
      <Button variant="outlined" component={Link} to="/latest" sx={buttonStyle}>
        ULTIMOS LANZAMIENTOS
      </Button>
      <Button
        variant="outlined"
        component={Link}
        to="/popular"
        sx={buttonStyle}
      >
        POPULARES
      </Button>
      <Button variant="outlined" component={Link} to="/search" sx={buttonStyle}>
        BUSCAR
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => navigate("/favorite")}
        size="large"
        endIcon={
          <Badge badgeContent={allFavorites()} color="primary">
            <FavoriteIcon color="action" />
          </Badge>
        }
      ></Button>
    </Box>
  );
}
