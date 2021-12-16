import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIES,
} from "./actionTypes";
import { Movie } from "../interfaces/interfaces";

interface FETCH_MOVIES_REQUEST_ACTION {
  type: typeof FETCH_MOVIES_REQUEST;
}

interface FETCH_MOVIES_SUCCESS_ACTION {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

interface FETCH_MOVIES_FAILURE_ACTION {
  type: typeof FETCH_MOVIES_FAILURE;
}

interface SEARCH_MOVIES_ACTION {
  type: typeof SEARCH_MOVIES;
  payload: string;
}

export type MovieActions =
  | FETCH_MOVIES_REQUEST_ACTION
  | FETCH_MOVIES_SUCCESS_ACTION
  | FETCH_MOVIES_FAILURE_ACTION
  | SEARCH_MOVIES_ACTION;
