import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, Grid, styled, Button } from "@mui/material";
import ActionItem from "./ActionItem";

const Wrapper = styled(Box)`
  background: #f2f2f2;
`;

const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: "50px";
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const { loading, product } = useSelector((state) => state.getProductDetails);
  console.log(product);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  return (
    <Wrapper>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
          </RightContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default DetailView;
