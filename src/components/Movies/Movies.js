import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import Loader from "../GlobalComponents/Loader";
import "./Movies.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContext);

  // const a = (movieItem) => {
  //   console.log(movieItem);
  // };
  return (
    <div className="movies">
      <Container className="container">
        {movies.results && movies.results.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          movies.results &&
          movies.results.map((movieItem, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
              alt="poster"
            />
            // <button onClick={() => a(movieItem)}>click</button>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};
export default Movies;