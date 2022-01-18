import React, { useContext } from "react";
import { AppContext } from "../App";
import { Modal, Box } from "@mui/material";
import { TOGGLE_MOVIE_INFO_MODAL } from "../reducers/actionTypes";

const styles: { [key: string]: React.CSSProperties } = {
  modalContent: {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 450,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "24",
    padding: "20px",
    alignItems: "center",
  },
  moviePoster: {
    height: "450px",
    width: "300px",
    marginRight: "20px",
  },
  contentContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    fontFamily: "'Montserrat', 'sans-serif'",
    alignItems: "center",
    width: "460px",
  },
  contentHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    border: "1px solid black",
    borderRadius: "50%",
    padding: "10px",
    marginLeft: "auto",
  },
  genres: {
    alignSelf: "start",
  },
};

const MovieInfoModal: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { showModal, movieInfo } = state;
  const handleClose = () => {
    dispatch({ type: TOGGLE_MOVIE_INFO_MODAL });
  };
  return (
    <div>
      <Modal open={showModal} onClose={handleClose}>
        <div style={styles.modalContent}>
          <div
            style={{
              ...styles.moviePoster,
              backgroundImage: `url(${movieInfo?.Poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div style={styles.contentContainer}>
            <div style={styles.contentHeader}>
              <h2>{movieInfo?.Title}</h2>
              <h2 style={styles.rating}>{movieInfo?.imdbRating}</h2>
            </div>

            <p style={styles.genres}>{movieInfo?.Genre}</p>
            <p style={{ marginTop: "15px" }}>{movieInfo?.Plot}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MovieInfoModal;
