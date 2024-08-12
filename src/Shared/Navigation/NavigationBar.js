import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, IconButton, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

const NavigationBar = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ mr: 1 }}>T..K</Typography>
        </Box>
      </Typography>
      <StyledButton color="inherit" component={Link} to="/">
        <HomeIcon sx={{ mr: 1 }} />
        Home
      </StyledButton>
      <StyledButton color="inherit" component={Link} to="/view">
        <PeopleIcon sx={{ mr: 1 }} />
        Employee List
      </StyledButton>
      <StyledButton color="inherit" component={Link} to="/form">
        <AddBoxIcon sx={{ mr: 1 }} />
        Employee Form
      </StyledButton>
    </Toolbar>
  </StyledAppBar>
);

export default NavigationBar;
