import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import imgBanner from "../images/banner.jpg";
import requests from "../Requests";
import axios from "../axios";

const Banner = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  const truncate = (string, n) =>
    string.length > n ? `${string.substr(0, n - 1)} ...` : string;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const random = Math.floor(Math.random()* request.data.results.length -1);
      setMovies(request.data.results[random]);
      return request;
    }
    fetchData(); 
  }, []);

  return (
    <div className={classes.root} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movies?.title || movies?.name || movies?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant="h6" className={classes.description}>
          {truncate(`${movies?.overview}`, 160)}
        </Typography>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: "relative",
    height: "440px",
    objectFit: "contain",
    color: "#fff",
  },
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontweight: "700",
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51, 51, 51, 0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zindex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
  },
  content: {
    margin: "30px"
  },
  description: {
    width: "70%"
  }
}));

export default Banner;
