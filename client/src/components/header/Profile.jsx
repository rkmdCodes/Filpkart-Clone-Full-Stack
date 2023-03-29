// eslint-disable-next-line
import React, { useEffect } from "react";
import { useState } from "react";
import { Menu, MenuItem, Box, Typography, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { margin } from "@mui/system";

const Component = styled(Typography)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  margin-left: 20px;
  font-size: 14px;
`;

const Profile = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const LogOut = ()=>{
  setAccount("");
 }



  return (
    <>
      <Box onClick={ handleClick}>
       
        <Typography>{account}</Typography>
      </Box>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            LogOut();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout> Logout </Logout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
