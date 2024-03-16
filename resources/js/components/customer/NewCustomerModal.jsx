import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {Label} from "@mui/icons-material";

const NewCustomerModal = ({showCustomerModal, setShowCustomerModal}) => {
    return (
        <Dialog
            open={showCustomerModal}
            // onClose={() => setShowModal(false)}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle style={{ backgroundColor: '#4dabf5' }}>Add New Customer</DialogTitle>
            <DialogContent>
                <Grid container sx={{mt: 2}} spacing={3}>
                    <Grid item xs={12}>
                        <h4 style={{ margin: 0}}>Personal</h4>
                    </Grid>
                    {/* First Row - First Name, Last Name and Middle Name */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label={'Area'}
                            name='firstname'
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.item_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            label={'Price Level'}
                            name={'lastname'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.bar_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            label={'Type'}
                            name={'lastname'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.bar_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <h4 style={{ margin: 0}}>Personal Information</h4>
                    </Grid>
                    {/* First Row - First Name, Last Name and Middle Name */}
                    <Grid item xs={12} sm={5}>
                        <TextField
                            required
                            label={'First Name'}
                            name='firstname'
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.item_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <TextField
                            label={'Last Name'}
                            name={'lastname'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.bar_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            required
                            label={'M.I.'}
                            name={'middlename'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.name}
                            fullWidth
                        />
                    </Grid>
                    {/* Second Row - Address */}
                    <Grid item xs={12}>
                        <TextField
                            label={'Address'}
                            name={'description'}
                            size={'small'}
                            // value={newItem.description}
                            // onChange={updateNewItem}
                            fullWidth
                        />
                    </Grid>
                    {/* Third Row - Date of Birth, Place of Birth, Sex, Citizenship */}
                    <Grid item xs={12} sm={2}>
                        <TextField
                            required
                            label={'Date of Birth'}
                            name={'unit_cost'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.unit_cost}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'Place of Birth'}
                            name={'quantity'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.quantity}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            required
                            label={'Sex'}
                            name={'quantity'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.quantity}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'Citizenship'}
                            name={'unit'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.unit}
                            fullWidth
                        />
                    </Grid>
                    {/*  Fourth Row - Occupation, TIN  */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label={'Occupation'}
                            name={'unit'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.unit}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'T.I.N.'}
                            name={'unit'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.unit}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <h4 style={{ margin: 0}}>Corporate Information</h4>
                    </Grid>
                    {/* First Row - First Name, Last Name and Middle Name */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label={'Company Name'}
                            name='firstname'
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.item_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            label={'Address'}
                            name={'lastname'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.bar_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label={'Nature of Business'}
                            name={'lastname'}
                            size={'small'}
                            // onChange={updateNewItem}
                            // value={newItem.bar_code}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    color={'error'}
                    onClick={() => setShowCustomerModal(false)}
                >Close</Button>
                <Button variant={'contained'} color={'primary'} >Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewCustomerModal
