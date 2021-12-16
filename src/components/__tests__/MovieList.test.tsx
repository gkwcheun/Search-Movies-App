import React from "react";
import MovieList from "../MovieList";
import { render, screen } from "@testing-library/react";

describe("Movie List tests", () => {
  test("Movie List renders properly", () => {
    const mockMovies = [
      {
        Title: "Movie1",
        Year: 1994,
        imdbID: "tt1375666",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      },
      {
        Title: "Movie2",
        Year: 1989,
        imdbID: "tt5295894",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg",
      },
      {
        Title: "Movie3",
        Year: 2022,
        imdbID: "tt5295990",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg",
      },
    ];
    render(<MovieList movieList={mockMovies} />);
    let title1 = screen.getByText("Movie1");
    let title2 = screen.getByText("Movie2");
    let title3 = screen.getByText("Movie3");
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    let year1 = screen.getByText("1994");
    let year2 = screen.getByText("1989");
    let year3 = screen.getByText("2022");
    expect(year1).toBeInTheDocument();
    expect(year2).toBeInTheDocument();
    expect(year3).toBeInTheDocument();
    let buttons = screen.getAllByTestId("movie-poster");
    expect(buttons.length).toEqual(3);
  });
});
