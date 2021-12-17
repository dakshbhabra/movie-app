import React from "react";
import Container from "../GlobalComponents/Container";
import Movies from "../Movies/Movies";
import MoviesPagination from "../Movies/MoviesPagination";
import "./Output.css"
const Output = () => {
  return (
    <div 
     className="output">
      <Container className="container">
        <React.Fragment>
          <Movies />
          <MoviesPagination />
        </React.Fragment>
      </Container>
    </div>
  );
};

export default Output;
