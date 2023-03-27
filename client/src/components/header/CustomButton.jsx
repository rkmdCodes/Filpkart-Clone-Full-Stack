import React from 'react'
import {Box,Button,Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
//components

import LoginDialog from '../login/LoginDialog';



const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: '16',
        alignItems: 'center',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const CartContainer = styled(Box)`
  color:blue,
  padding:5px;
  display:flex;
`;

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0 !important',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

export default function CustomButton() {


  const [open ,setOpen] = useState(false);

  const openDialog = ()=>{
    setOpen(true);
  }


  return (
    <Wrapper>
       <LoginButton variant="contained" onClick={()=>openDialog()}>
          Login
       </LoginButton>
    
       <Typography style={{'margin-top':3,width:135,'font-size':'1rem'}} >Become a seller</Typography>
       <Typography style={{'margin-top':3}} >More</Typography>

       <CartContainer>
          <ShoppingCartIcon/>
          <Typography>Cart</Typography>
       </CartContainer>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}
