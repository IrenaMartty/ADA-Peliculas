import Header from "./components/static/Header"
import Footer from "./components/static/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./views/HomePage"
import ContainLatestMovies from "./views/ContainLatestMovies";
import ContainPopularMovies from "./views/ContainPopularMovies";
import DetailMovies from "./views/DetailMovies";
import SearchMovies from "./views/SearchMovies";
import FavoriteMovies from "./views/FavoriteMovies";
import FavoriteContextProvider from "./context/FavoriteContext"; 


function App() {

  return (
     <FavoriteContextProvider>
    <BrowserRouter>
     <Header style={{ position: 'absolute', zIndex: 1 }} />
     <Routes>
      <Route path="/" element= {<HomePage/>}/>
      <Route path="/latest" element= {<ContainLatestMovies/>}/>
      <Route path="/popular" element= {<ContainPopularMovies/>}/>
      <Route path="/search" element= {<SearchMovies/>}/>
      <Route path="/detail/:idMovie" element= {<DetailMovies/>}/>
      <Route path="/favorite" element= {<FavoriteMovies/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
     </FavoriteContextProvider>
  )
}

export default App
