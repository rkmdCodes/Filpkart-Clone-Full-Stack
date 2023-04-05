import React from "react";
import { Box, styled, Grid } from "@mui/material";
import { imageURL } from "../../constants/data";

const GridWrapper = styled(Grid)`
margin-top:10px;
justify-content:space-between;
`;

const Image = styled('img')( ({theme})=>({
   marginTop:"10px",
   width:"100%",
   display:"flex",
   justifyContent:"space-between",
   [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:120,
   }
}));


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
    <GridWrapper  lg={12} sm={12} md={12} xs={12} container>
      {imageURL.map((url) => (
        <Grid item lg={4} sm={12} md={4} xs={12} >
          <img
            src={url}
            alt="Banner Image"
            style={{
            width:"100%"
            }}
          />
        </Grid>
      ))}
    </GridWrapper>
    <Image src={url} alt="covid fundraiser"/>
    </>
  );
};

export default MidSection;
