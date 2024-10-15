import React, { useState, useRef } from "react";
import { AppBar, Button, Stack, Drawer, Box, Toolbar, Typography, Fab, IconButton, useTheme, useMediaQuery } from "@mui/material";

import MicIcon from '@mui/icons-material/Mic';



export default function Footer({ }) {

    return (

        <AppBar position="fixed" color="white" elevation={0} sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Box sx={{ position: "absolute", right: 0, left: 0, top: -10, zIndex: 1, margin: '0 auto', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Fab color="error">
                        <MicIcon />
                    </Fab>
                </Box>


            </Toolbar>
        </AppBar>

    )
}