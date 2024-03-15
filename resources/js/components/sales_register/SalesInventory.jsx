import {
    Button,
    Card,
    CardContent,
    CardHeader, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {ReceiptLong} from "@mui/icons-material";
import React from "react";

const SalesInventory = ({ items, addToCart }) => {
    return(
        <Card>
            <CardHeader
                avatar={
                    <ReceiptLong/>
                }
                title={'Product Inventory'}
            />
            <CardContent>
                <Paper sx={{ width: '100%', overflow: 'auto' }}>
                    <TableContainer sx={{maxHeight: 500}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Item</b></TableCell>
                                    <TableCell><b>Stock</b></TableCell>
                                    <TableCell><b>Price</b></TableCell>
                                    <TableCell><b>Action</b></TableCell>
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
                                                    <TableCell><Button
                                                        variant={'text'}
                                                        color={'success'}
                                                        size={'small'}
                                                        onClick={() => addToCart({
                                                            'id' : item.id,
                                                            'name' : item.name,
                                                            'description' : item.description,
                                                            'item_code' : item.item_code,
                                                            'quantity' : 1,
                                                            'price' : item.unit_cost
                                                        })}
                                                    >Add</Button></TableCell>
                                                </TableRow>
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </CardContent>
        </Card>
    )
}

export default SalesInventory
