import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, Grid, styled, Button } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";

const Wrapper = styled(Box)`
  background: #f2f2f2;
`;

const Container = styled(Grid)(({theme})=>({
  background: "#ffffff",
  display: "flex",
  [theme.breakpoints.down('md')]:{
    margin:0,
  }
}));

const RightContainer = styled(Grid)`
  margin-top: "50px";
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
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
           
            <ProductDetails product={product}/>
          </RightContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default DetailView;
