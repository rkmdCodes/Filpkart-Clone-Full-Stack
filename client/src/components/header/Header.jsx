import { useState } from "react";

import {
  List,
  ListItem,
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";

import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  hight: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: Italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledMenu = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => {
    return (
      <Box width="200px" handleClick={handleClose}>
        <List>
          <ListItem>
            <CustomButton />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <StyledMenu color="inherit" onClick={() => handleOpen()}>
          <Menu />
        </StyledMenu>
        <Drawer open={open} close={handleClose}>
          {list()}
        </Drawer>
        <Component>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#ffE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt="sub logo image" />
            </Box>
          </Link>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
