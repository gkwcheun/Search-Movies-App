import { initialState } from "../App";
import { Movie } from "../interfaces/interfaces";
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  SEARCH_MOVIES,
} from "./actionTypes";
import { movieReducer } from "./movieReducer";

describe("movie reducer tests", () => {
  test("fetch movie request triggers loading state", () => {
    const state = movieReducer(initialState, { type: FETCH_MOVIES_REQUEST });
    expect(state.loading).toEqual(true);
    expect(state).toEqual({ ...initialState, loading: true });
  });
  test("fetch movie success passes movie list payload to state", () => {
    const mockMovies: Movie[] = [
      {
        Title: "Inception",
        Year: 2010,
        imdbID: "tt1375666",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      },
      {
        Title: "Inception: The Cobol Job",
        Year: 2010,
        imdbID: "tt5295894",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg",
      },
      {
        Title: "Inception: Jump Right Into the Action",
        Year: 2010,
        imdbID: "tt5295990",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg",
      },
    ];
    const state = movieReducer(initialState, {
      type: FETCH_MOVIES_SUCCESS,
      payload: mockMovies,
    });
    expect(state.movieList).toEqual(mockMovies);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      movieList: mockMovies,
    });
  });
  test("fetch movie failure passes error message to state", () => {
    const state = movieReducer(initialState, {
      type: FETCH_MOVIES_FAILURE,
    });
    expect(state.error).toEqual("Something went wrong");
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "Something went wrong",
    });
  });
  test("search movie passes correct string to search state", () => {
    const state = movieReducer(initialState, {
      type: SEARCH_MOVIES,
      payload: "Galvin",
    });
    expect(state.search).toEqual("Galvin");
    expect(state).toEqual({
      ...initialState,
      loading: false,
      search: "Galvin",
    });
  });
});
