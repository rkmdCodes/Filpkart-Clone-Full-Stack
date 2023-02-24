import React from "react";
import { Fragment } from "react";
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";
import styledEngine from "@mui/styled-engine";

const Container = styled(Box)`
  padding:10px;
  background:#F2F2F2;
`;

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Banner />
      </Container>
    </Fragment>
  );
};

export default Home;
