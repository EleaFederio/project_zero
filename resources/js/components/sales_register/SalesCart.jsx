import {
    Button, Card,
    CardActions,
    CardContent,
    CardHeader, Grid, InputLabel,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import React from "react";

const SalesCart = ({cartItems, summary, deleteProduct}) => {



    return(
        <Card>
            <CardHeader
                avatar={
                    <ShoppingCart />
                }
                title={'Sales Cart'}
            />
            <CardContent>
                <Paper sx={{ width: '100%', overflow: 'auto', mb: 3 }}>
                    <TableContainer sx={{maxHeight: 500}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Item</b></TableCell>
                                    <TableCell><b>Qty</b></TableCell>
                                    <TableCell><b>Price</b></TableCell>
                                    <TableCell><b>Action</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cartItems.map((cartItem) => (
                                        <TableRow>
                                            <TableCell>
                                                <p style={{margin: 0}}>{cartItem.name}</p>
                                                <p style={{margin: 0}}>{cartItem.description}</p>
                                            </TableCell>
                                            <TableCell>{cartItem.quantity}</TableCell>
                                            <TableCell>₱{cartItem.price * cartItem.quantity}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant={'text'}
                                                    color={'error'}
                                                    size={'small'}
                                                    onClick={() => deleteProduct(cartItem.id)}
                                                >X</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Grid container spacing={2}>
                    <Grid item xs={8}>

                    </Grid>
                    <Grid item xs={4}>
                        <h3><b>Total: ₱</b>{summary.total}</h3>
                    </Grid>
                </Grid>
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
                        <Grid item>
                            <Button variant={'contained'}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default SalesCart
