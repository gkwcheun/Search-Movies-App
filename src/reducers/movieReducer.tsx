import { Movie, MovieInfo } from "../interfaces/interfaces";
import { MovieActions } from "./actions";
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_INFO_SUCCESS,
  FETCH_MOVIE_INFO_FAILURE,
  SEARCH_MOVIES,
  TOGGLE_MOVIE_INFO_MODAL,
} from "./actionTypes";

export interface MovieState {
  loading: boolean;
  movieList: Movie[];
  error: string;
  search: string;
  showModal: boolean;
  movieInfo?: MovieInfo;
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
    case FETCH_MOVIE_INFO_SUCCESS:
      return {
        ...state,
        movieInfo: action.payload,
        showModal: true,
      };
    case FETCH_MOVIE_INFO_FAILURE:
      return {
        ...state,
        showModal: false,
      };
    case TOGGLE_MOVIE_INFO_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};
