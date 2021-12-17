import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import "./MoviesPagination.css";
const MoviesPagination = () => {
  const { newPage, currentPage, showPagination } = useContext(MovieContext);

  return (
    <div
      className="moviesPagination"
    >
      {showPagination && (
        <Container className="container">
          <React.Fragment>
            <button
              className="btn"
              style={{
                cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                background: currentPage !== 1 ? "#32de57" : "#303847",
              }}
              onClick={() => newPage("previous")}
            >
              Prev Page
            </button>
            <button
              className="btn"
              style={{
                cursor: "pointer !important",
              }}
              onClick={() => newPage("next")}
            >
              Next Page
            </button>
          </React.Fragment>
        </Container>
      )}
    </div>
  );
};

export default MoviesPagination;
