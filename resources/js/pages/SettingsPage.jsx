import React from "react";
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";

const SettingsPage = () => {
    return (
        <>
            <CssBaseline></CssBaseline>
            <Box sx={{flexGrow: 1}}>
                <AppBar position={'static'}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            component={'div'}
                            sx={{ flexGrow: 1 }}
                        >
                            Settings
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default SettingsPage
