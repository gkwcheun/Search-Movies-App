import React from "react";
import { Movie } from "../interfaces/interfaces";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movieList: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <>
      {movieList.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </>
  );
};

export default MovieList;
