import React, { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { AppContext } from "../App";
import NoResults from "./NoResults";
import MovieList from "./MovieList";

const styles: { [key: string]: React.CSSProperties } = {
  mainContainer: {
    display: "flex",
    marginTop: "50px",
    minHeight: "500px",
    maxWidth: "900px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  loadingSpinner: {
    width: "100px",
    height: "100px",
  },
};

const MainContainer: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div style={styles.mainContainer}>
      {state.loading ? (
        <CircularProgress style={styles.loadingSpinner} />
      ) : state.movieList !== undefined && !state.error ? (
        <MovieList movieList={state.movieList} />
      ) : (
        <NoResults search={state.search} error={state.error} />
      )}
    </div>
  );
};

export default MainContainer;
