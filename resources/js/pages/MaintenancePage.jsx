import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline,
    Fab,
    InputLabel,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";

const MaintenancePage = () => {
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
                            Maintenance
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container sx={{mt: 3}}>
                <InputLabel sx={{display: 'inline', fontSize: 30}}>Search: </InputLabel>
                <TextField sx={{display: 'inline'}} variant={'outlined'} size={'small'} />
                <Button sx={{display: 'inline'}} variant={'contained'}>Search Barcode</Button>

                <Fab
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        right: 60
                    }}
                    color={"primary"}
                >
                    +
                </Fab>
            </Container>
        </>
    )
}

export default MaintenancePage
