import React, { useContext, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { AppContext } from "../App";
import useDebounce from "../hooks/useDebounce";
import { SEARCH_MOVIES } from "../reducers/actionTypes";
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
} from "../reducers/actionTypes";

const styles: { [key: string]: React.CSSProperties } = {
  searchBar: {
    width: "350px",
    color: "black",
  },
};

const SearchBar: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { search } = state;
  const debouncedSearchTerm = useDebounce(state.search, 500);

  useEffect(() => {
    console.log("search term changed");
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    let apiURL = `http://www.omdbapi.com/?apikey=${apiKey}=${search.trim()}`;
    dispatch({ type: FETCH_MOVIES_REQUEST });
    axios
      .get(apiURL)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: response.data["Search"],
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_MOVIES_FAILURE,
        });
      });
  }, [debouncedSearchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_MOVIES, payload: e.target.value });
  };

  return (
    <TextField
      style={styles.searchBar}
      id="standard-basic"
      label="Search for a movie!"
      variant="standard"
      placeholder="movie"
      value={state.search}
      onChange={handleChange}
      data-testid="search-bar"
      inputProps={{ "data-testid": "content-input" }}
    />
  );
};

export default SearchBar;
