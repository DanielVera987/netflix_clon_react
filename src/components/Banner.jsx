import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import imgBanner from "../images/banner.jpg";

const Banner = () => {
  const classes = useStyles();

  const truncate = (string, n) =>
    string.length > n ? `${string.substr(0, n - 1)} ...` : string;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          Move Title
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant="h6" className={classes.description}>
          {truncate("Move description", 150)}
        </Typography>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${imgBanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
}));

export default Banner;
