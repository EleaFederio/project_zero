import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {Person} from "@mui/icons-material";

const CustomerList = () => {
    return(
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Person></Person>
                    }
                    title={'Customer List'}
                />
                <CardContent>
                    <Paper sx={{ mt: 3, width: '100%', overflow: 'auto' }}>
                        <TableContainer sx={{ maxHeight: 780}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><b>ID</b></TableCell>
                                        <TableCell><b>Name</b></TableCell>
                                        <TableCell><b>Address</b></TableCell>
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
            </Card>
        </>
    )
}

export default CustomerList;
