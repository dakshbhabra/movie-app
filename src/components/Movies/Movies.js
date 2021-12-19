import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import Loader from "../GlobalComponents/Loader";
import "./Movies.css";
import * as React from 'react';
import MovieItem from "./MovieItem";
import RefreshIcon from "@mui/icons-material/Refresh";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const Movies = () => {
  const { movies, isLoading, handleSearch } = useContext(MovieContext);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const a = (movieItem) =>{
  //   console.log(movieItem);

  // }
  return (
    <div className="movies">
      <Container className="container">
        {movies.results && movies.results.length === 0 && (
          <div className="notFound">
            <h1 className="error">Result not found</h1>
            <RefreshIcon fontSize="large" sx={{cursor:"pointer"}} onClick={handleSearch} />
          </div>
        )}
        {!isLoading ? (
          movies.results &&
          movies.results.map((movieItem, index) => (
            <div key={index} className="img">
              <MovieItem movieItem={movieItem} />
              {/* <button onClick={() => a(movieItem)}>click</button> */}
            </div>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};
export default Movies;
