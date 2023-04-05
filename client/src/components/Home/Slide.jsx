import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Countdown from "react-countdown";

const Component = styled(Box)`
  background: #ffffff;
  margin-top: 10px;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: "2px";
  font-size: 13px;
  font-weight: 600;
`;

const Image = styled("img")({
  height: 150,
  width: "auto",
});

const Text = styled(Typography)`
margin-top:"5px",
font-size:"14px"
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

const date = Date.now() + 5.04e7;

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box>
      {hours}:{minutes}:{seconds} Left
    </Box>
  );
};

const Slide = ({ products ,title , timer }) => {
  return (
    <Text>
      <Deal>
        <DealText>{title}</DealText>
        {timer &&  <Timer>
          <img src={timerURL} alt="timer image" style={{ width: "24px" }} />
          <Countdown date={date} renderer={renderer} />
        </Timer> }
       
        <ViewAllButton variant="contained">View all</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={product.url} alt="product" />
            <Text style={{ fontWeight: 600, color: "#212121" }}>
              {product.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{product.discount}</Text>
            <Text style={{ color: "#212121" ,opacity:"0.6"}}>{product.tagline}</Text>
          </Box>
        ))}
      </Carousel>
    </Text>
  );
};

export default Slide;
