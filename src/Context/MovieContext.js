import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [showPagination, setShowPagination] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const API_KEY = "6612b99a5d631a2f241d99c5783ac47f";

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    const data = await response.json();
    if (search.trim() === "") {
      setMovies(data);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "" || search.trim().length < 3) {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();
    setMovies(searchData);
    setShowPagination(false);
  };

  const newPage = (direction) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (search.trim() === "") {
      setShowPagination(true);
    }
    getMovies();
  }, [search, currentPage]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(loadingTimeout);
  }, [movies, currentPage]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
        handleSearch,
        currentPage,
        setCurrentPage,
        newPage,
        showPagination,
        setShowPagination,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
