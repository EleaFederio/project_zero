import React from "react";
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";

const ReportPage = () => {
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
                            Reporting
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default ReportPage
