import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box, Button, Card, CardActions, CardContent, CardHeader,
    Container,
    CssBaseline, Fab,
    Grid,
    InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {ReceiptLong, ShoppingCart} from "@mui/icons-material";
import AddSaleModal from "@/components/sales_register/AddSaleModal.jsx";

const SalesPage = () => {

    const [items, setItems] = useState();
    const [salesModalShow, setSalesModalShow] = useState(false);
    const [cartItems, setCartItems] = useState();

    const getItems = () => {
        axios.get('api/items')
            .then(res => {
                setItems(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getItems();
    }, [])

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

            <Container sx={{mt: 5}} maxWidth={'xl'}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <ReceiptLong/>
                                }
                                title={'Sales Inventory'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card>
                            <CardHeader
                                avatar={
                                <ShoppingCart />
                                }
                                title={'Sales Cart'}
                            />
                            <CardContent>
                                <Paper sx={{ width: '100%', overflow: 'auto' }}>
                                    <TableContainer sx={{maxHeight: 500}}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell><b>Item</b></TableCell>
                                                    <TableCell><b>Qty</b></TableCell>
                                                    <TableCell><b>Price</b></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </CardContent>
                            <CardActions>
                                <form sx={{mt: 4, ml: 3}}>
                                    <Grid container alignItems={'center'} spacing={2}>
                                        <Grid item>
                                            <InputLabel>Invoice</InputLabel>
                                        </Grid>
                                        <Grid item>
                                            <TextField label={'Name'} sx={{height: 'auto', fontSize: '0.8rem'}} variant={'outlined'} size={'small'} />
                                        </Grid>
                                        <Grid item>
                                            <TextField label={'Address'} sx={{height: 'auto', fontSize: '0.8rem'}} variant={'outlined'} size={'small'} />
                                        </Grid>
                                    </Grid>
                                    <Button>Submit</Button>
                                </form>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Fab
                style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 60
                }}
                color={"primary"}
                onClick={() => setSalesModalShow(true)}
            >
                +
            </Fab>

            <AddSaleModal
                salesModalShow={salesModalShow}
                items={items}
                setSalesModalShow={setSalesModalShow}
            />
        </>
    )
}

export default SalesPage
