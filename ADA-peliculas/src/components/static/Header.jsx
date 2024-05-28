import { Box, Button, Badge, colors } from "@mui/material/";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import '@fontsource/nunito';

const buttonStyle = {
  color: "white",
  borderColor: "white",
  margin: "4px",
};

// const headerStyle = {
//   display: 'flex',
//   alignItems: 'center', 
//   justifyContent: 'space-between',
//   margin: 0,
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   padding: "8px",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   zIndex: 1000,
  
// };

export default function Header() {
  const navigate = useNavigate();

  const { allFavorites } = useContext(FavoriteContext);
  return (
    <Box sx={{
      display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        margin: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '8px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'background-color 0.3s ease-in-out', 
        borderBottom: '0.5px solid white',
        '@media (max-width: 600px)': {
          flexDirection: 'column', 
          justifyContent: 'center', 
          textAlign: 'center', 
          backgroundColor: 'black',
          zIndex: 0,
          position: 'relative',
          width: 'flex'
          
      },
    }} >
    <h1 style={{ fontFamily: 'Nunito', color: 'white' }}>peliADA</h1>
    <div>
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
    </div>

      <Button
        variant="text"
        onClick={() => navigate("/favorite")}
        size="large"
        endIcon={
          <Badge badgeContent={allFavorites()} sx={{color: 'red'}}>
            <FavoriteIcon sx={{color: 'white'}}/>
          </Badge>
        }
      ></Button>
    </Box>
  );
}
