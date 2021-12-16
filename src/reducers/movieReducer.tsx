import { Movie } from "../interfaces/interfaces";
import { MovieActions } from "./actions";
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  SEARCH_MOVIES,
} from "./actionTypes";

export interface MovieState {
  loading: boolean;
  movieList: Movie[];
  error: string;
  search: string;
}

export const movieReducer = (state: MovieState, action: MovieActions) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movieList: action.payload,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movieList: [],
        loading: false,
        error: "Something went wrong",
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        search: action.payload,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};
