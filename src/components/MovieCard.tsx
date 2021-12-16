import React, { useState } from "react";
import { Button } from "@mui/material";
import { Movie } from "../interfaces/interfaces";
import placeholder_poster from "./static_files/placeholder_poster.png";

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
  const [show, setShow] = useState<boolean>(false);
  const moviePoster =
    movie.Poster !== "N/A" ? movie.Poster : placeholder_poster;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShow(!show);
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
      ></div>
      <div style={styles.movieInfo}>
        <p style={styles.movieTitle}>{movie.Title}</p>
        <p style={styles.movieYear}>{movie.Year}</p>
      </div>
      <Button
        style={styles.typeBtn}
        variant="outlined"
        onClick={(e) => handleClick}
      >
        ADD TO WATCHLIST
      </Button>
    </div>
  );
};

export default MovieCard;
