import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow
} from "@mui/material"

const AddSaleModal = ({ items }) => {
    return(
        <Dialog
            open={true}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle>Add Item to Cart</DialogTitle>
            <DialogContent>
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
                                {
                                    !items ? <TableRow><p>Loading...</p></TableRow> :
                                        items.map((item) => {
                                            return(
                                                <TableRow key={item.item_code}>
                                                    <TableCell></TableCell>
                                                    <TableCell>{item.name}({item.item_code})</TableCell>
                                                    <TableCell>₱{item.unit_cost}</TableCell>
                                                    <TableCell>{item.total_qty}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    )
}

export default AddSaleModal
