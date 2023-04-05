import React from "react";
import { Box, styled } from "@mui/material";
import Slide from "./Slide.jsx";

const Component = styled(Box)`
  display: flex;
`;

const CarouselComponent = styled(Box)`
  width: 83%;
`;

const AdComponent = styled(Box)`
  background: #ffffff;
  padding: 5px;
  margin-top:10px;
  margin-left:10px;
  width:17%;
  text-align:center;
`;

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <CarouselComponent>
        <Slide products={products} title={title} timer={timer} />
      </CarouselComponent>
      <AdComponent>
        <img src={adURL} alt="add image" width="217px" />
      </AdComponent>
    </Component>
  );
};

export default MidSlide;
