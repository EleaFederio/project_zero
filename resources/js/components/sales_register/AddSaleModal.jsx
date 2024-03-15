import React from 'react';
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    InputLabel,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, TextField, Typography
} from "@mui/material"

const options = ['Item Code', 'Item Name'];

const AddSaleModal = ({ salesModalShow, items, setSalesModalShow, addToCart }) => {
    return(
        <Dialog
            open={salesModalShow}
            onClose={() => setSalesModalShow(false)}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle>Add Item to Cart</DialogTitle>
            <DialogContent>
                <form>
                    <Grid container sx={{mt: 2}} alignItems={'center'} spacing={2}>
                        <Grid item>
                            <InputLabel>Search Items by:</InputLabel>
                        </Grid>
                        <Grid item>
                            <Autocomplete
                                disablePortal
                                sx={{height: 'auto', fontSize: '0.8rem', width: '200px'}}
                                size='small'
                                options={options}
                                defaultValue={'Item Name'}
                                freeSolo={false}
                                disableClearable
                                renderInput={(params) => <TextField {...params} label="Controllable" />}
                            />
                        </Grid>
                        <Grid item>
                            <TextField sx={{height: 'auto', fontSize: '0.8rem'}} variant={'outlined'} size={'small'}/>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'}>Search Barcode</Button>
                        </Grid>
                    </Grid>
                </form>
                <Paper sx={{ width: '100%', overflow: 'auto' }}>
                    <TableContainer sx={{maxHeight: 500}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Item</b></TableCell>
                                    <TableCell><b>Stock</b></TableCell>
                                    <TableCell><b>Price</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    !items ? <TableRow><p>Loading...</p></TableRow> :
                                        items.map((item) => {
                                            return(
                                                <TableRow key={item.id} >
                                                    <TableCell>{item.name}({item.item_code})</TableCell>
                                                    <TableCell>{item.total_qty}</TableCell>
                                                    <TableCell>₱{item.unit_cost}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Grid container sx={{mt: 3}} spacing={2}>
                    <Grid item>
                        <Typography>Quantity:</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' size='small'>-</Button>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4'>1</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' size='small'>+</Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='error' onClick={() => setSalesModalShow(false)} >Cancel</Button>
                <Button variant='contained' >Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddSaleModal
