import React ,{useEffect} from "react";
import { Fragment } from "react";
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";
import styledEngine from "@mui/styled-engine";
import {getProduct} from "../../redux/actions/productActions";
import {useDispatch,useSelector} from "react-redux";

const Container = styled(Box)`
  padding:10px;
  background:#F2F2F2;
`;

const Home = () => {

  let {products} = useSelector(state=>state.getProducts);
  console.log(products);
  const dispatch = useDispatch(); 

  useEffect(()=>{
   dispatch(getProduct());
  },[dispatch]);

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
