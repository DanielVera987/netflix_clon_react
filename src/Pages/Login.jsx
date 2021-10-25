import React, { useState } from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import logo from "../images/logo.png";
import HeroLogin from "../images/hero_login.jpeg";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";
import SignUp from "./SignUp";

const Login = () => {
  const classes = useStyles();
  const { signIn, setSignIn } = useState(false);

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />

      <NetflixButton className={classes.session}>Iniciar sesión</NetflixButton>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Unlimited films, TV programmes and more.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Watch anywhere. Cancel ay any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </Typography>

            <div className={classes.inputBlock}>
              <NetflixInput placeholder="Email address" />
              <NetflixButton wide="medium" onClick={() => setSignIn(true)}>
                GET STARTED
              </NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroLogin})`,
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 20,
    left: 20,
    width: "110px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#ffffff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
}));

export default Login;
