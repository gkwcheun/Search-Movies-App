import React from "react";
import MovieCard from "../MovieCard";
import { render, screen } from "@testing-library/react";

describe("Movie card tests", () => {
  test("movie card renders movie info properly", () => {
    const mockMovie = {
      Title: "Inception",
      Year: 2010,
      imdbID: "tt1375666",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    };
    render(<MovieCard movie={mockMovie} />);
    let title = screen.getByText("Inception");
    let year = screen.getByText("2010");
    let poster = screen.getByTestId("movie-poster");
    let button = screen.getByText("ADD TO WATCHLIST");
    expect(year).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(poster).toHaveStyle(`background-image: url(${mockMovie.Poster})`);
    expect(button).toBeInTheDocument();
  });
});
