import React from 'react';
import {AppBar, Box, Container, CssBaseline, Toolbar, Typography} from "@mui/material";

const SalesPage = () => {
    return (
        <>
            <CssBaseline/>
            <Box sx={{flexGrow: 1}}>
                <AppBar position={'static'}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            component={'div'}
                            sx={{ flexGrow: 1 }}
                        >
                            Sales Register
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container>

            </Container>
        </>
    )
}

export default SalesPage
