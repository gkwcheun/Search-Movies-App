import React, { useReducer, Dispatch } from "react";
import { movieReducer, MovieState } from "./reducers/movieReducer";
import { MovieActions } from "./reducers/actions";
import SearchBar from "./components/SearchBar";
import MainContainer from "./components/MainContainer";

export const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: "'Montserrat', 'sans-serif'",
  },
  appHeader: {
    marginTop: "50px",
    marginBottom: "50px",
  },
};

export const initialState: MovieState = {
  loading: true,
  movieList: [],
  search: "",
  error: "",
};

export interface AppContextInterface {
  state: MovieState;
  dispatch: Dispatch<MovieActions>;
}

export const AppContext = React.createContext<AppContextInterface>(
  {} as AppContextInterface
);

function App() {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div style={styles.appContainer}>
        <h1 style={styles.appHeader}>OMDB Movie Finder</h1>
        <SearchBar />
        <MainContainer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
