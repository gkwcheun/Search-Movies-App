import React from "react";
import SearchBar from "../SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../../App";
import { MovieState } from "../../reducers/movieReducer";
import {
  FETCH_MOVIES_REQUEST,
  SEARCH_MOVIES,
} from "../../reducers/actionTypes";

describe("Testing search bar", () => {
  const renderSearchBar = (state: MovieState, dispatch: () => void) => {
    return render(
      <AppContext.Provider value={{ state, dispatch }}>
        <SearchBar />
      </AppContext.Provider>
    );
  };
  test("Search bar renders properly", () => {
    let state = {
      loading: true,
      movieList: [],
      search: "",
      error: "",
    };
    let dispatch = jest.fn();
    renderSearchBar(state, dispatch);
    let searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });
  test("Typing in search bar calls dispatch", () => {
    let state = {
      loading: true,
      movieList: [],
      search: "",
      error: "",
    };
    let dispatch = jest.fn();
    renderSearchBar(state, dispatch);
    let searchBar = screen.getByTestId("content-input");
    fireEvent.change(searchBar, { target: { value: "Galvin" } });
    expect(dispatch).toBeCalledWith({ type: FETCH_MOVIES_REQUEST });
    expect(dispatch).toBeCalledWith({
      type: SEARCH_MOVIES,
      payload: "Galvin",
    });
    expect(dispatch).toBeCalledTimes(2);
  });
});
