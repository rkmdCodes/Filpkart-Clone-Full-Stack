import React from 'react'
import { navData } from '../../constants/data';
import {Box,styled ,Typography} from '@mui/material';


const Wrapper = styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between;
`;

const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`;

const Text = styled(Typography)`
  font-size:14px;
  font-weight:600;
  font-family:inherit;
`;


const NavBar = ()=>{
  return (
    <Wrapper>
    {navData.map((item,key)=>{
           return(<Container>
             <img src={item.url} style={{width:'64px'}}/>
            <Text>{item.text}</Text>
            </Container>
           );
        }
        )
    }
    </Wrapper>
  )
}

export default NavBar;