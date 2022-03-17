import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Menu
          </Typography>
        </IconButton>

        <Button color="inherit">Create</Button>
        <Button color="inherit">Read</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
