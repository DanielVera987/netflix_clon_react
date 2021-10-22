import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
} from "@material-ui/core";
import logo from "../images/logo.png";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const hiddeHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hiddeHeader);
    return () => window.removeEventListener("scroll", hiddeHeader);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolBar}>
        <IconButton onClick={() => history.push("/")}>
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>

        <Avatar
          variant="square"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/profile")}
        />
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));

export default Header;
