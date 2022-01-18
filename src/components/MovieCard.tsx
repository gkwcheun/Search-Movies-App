import React, { useContext } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Movie } from "../interfaces/interfaces";
import placeholder_poster from "./static_files/placeholder_poster.png";
import { AppContext } from "../App";
import {
  FETCH_MOVIE_INFO_SUCCESS,
  FETCH_MOVIE_INFO_FAILURE,
} from "../reducers/actionTypes";

interface MovieCardProps {
  movie: Movie;
}

const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    height: "475px",
  },
  moviePoster: {
    height: "375px",
    width: "250px",
  },
  movieInfo: {
    display: "flex",
    width: "250px",
    justifyContent: "space-between",
  },
  movieTitle: {
    marginRight: "auto",
    minHeight: "50px",
    maxWidth: "180px",
  },
  movieYear: {},
  typeBtn: {
    width: "250px",
  },
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);
  const moviePoster =
    movie.Poster !== "N/A" ? movie.Poster : placeholder_poster;

  const toggleModal = () => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    let apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}&plot=full`;
    axios
      .get(apiURL)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIE_INFO_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_MOVIE_INFO_FAILURE,
        });
      });
  };

  return (
    <div style={styles.cardContainer}>
      <div
        style={{
          ...styles.moviePoster,
          backgroundImage: `url(${moviePoster})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        data-testid="movie-poster"
        onClick={toggleModal}
      ></div>
      <div style={styles.movieInfo}>
        <p style={styles.movieTitle}>{movie.Title}</p>
        <p style={styles.movieYear}>{movie.Year}</p>
      </div>
      <Button style={styles.typeBtn} variant="outlined" onClick={toggleModal}>
        View Details
      </Button>
    </div>
  );
};

export default MovieCard;
