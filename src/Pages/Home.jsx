import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Home;
