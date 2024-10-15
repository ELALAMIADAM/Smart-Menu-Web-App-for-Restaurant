import React,{useState} from "react";
import { AppBar, Button, Stack, Drawer, Box, Toolbar, Typography, IconButton, useTheme } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonIcon from '@mui/icons-material/Person';
import CssBaseline from '@mui/material/CssBaseline';

export default function Header(){

    const navigate = useNavigate();
    const location = useLocation();

    const removeSlashes = (path) => {
      return path.replace(/\//g, ''); // Enlève tous les "/"
    };
  
    const cleanedPath = removeSlashes(location.pathname);

    return(
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="white">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={()=>navigate("/")}
            >
              <HomeIcon sx={{fontSize:32}}/>
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" component="div" sx={{ textAlign: "center", cursor: "pointer", paddingRight: 5 }}>
                {cleanedPath.toUpperCase() === "" ? "ACCUEIL" : cleanedPath.toUpperCase()}
              </Typography>
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="aide"
            >
              <HelpOutlineIcon sx={{fontSize:32}}/>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="profil"
            >
              <PersonIcon sx={{fontSize:32}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    )
}