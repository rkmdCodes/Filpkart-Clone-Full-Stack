import React ,{useEffect} from "react";
import { Fragment } from "react";
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";
import styledEngine from "@mui/styled-engine";
import {getProduct} from "../../redux/actions/productActions";
import {useDispatch,useSelector} from "react-redux";
import Slide from "./Slide.jsx";
import MidSlide from "./MidSlide.jsx";
import MidSection from "./MidSection.jsx";

const Container = styled(Box)`
  padding:10px;
  background:#F2F2F2;
`;

const Home = () => {

  let {products} = useSelector(state=>state.getProducts);
  const dispatch = useDispatch(); 

  useEffect(()=>{
   dispatch(getProduct());
  },[dispatch]);

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Banner />
        <MidSlide products = {products} title="Deal Of The Day" timer={true}/>
        <MidSection/>
        <Slide products = {products} title="Discounts For You" timer={false}/>
        <Slide products = {products} title="Suggesting Items" timer={false}/>
        <Slide products = {products} title="Top Selections" timer={false}/>
        <Slide products = {products} title="Recommended Items" timer={false}/>
        <Slide products = {products} title="Trending Offers" timer={false}/>
        <Slide products = {products} title="Seasons Top Picks" timer={false}/>
        <Slide products = {products} title="Top Deals On Accessories" timer={false}/>
      </Container>
    </Fragment>
  );
};

export default Home;
