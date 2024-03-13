import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material"

const AddItemModal = ({ showModal, setShowModal, newItem, updateNewItem, addItem }) => {
    return(
        <Dialog
            open={showModal}
            onClose={() => setShowModal(false)}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle>Add New Item</DialogTitle>
            <DialogContent>
                <Grid container sx={{mt: 2}} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label={'Item Code'}
                            name='item_code'
                            onChange={updateNewItem}
                            value={newItem.item_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label={'Bar Code'}
                            name={'bar_code'}
                            onChange={updateNewItem}
                            value={newItem.bar_code}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label={'Name'}
                            name={'name'}
                            onChange={updateNewItem}
                            value={newItem.name}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={'Description'}
                            name={'description'}
                            value={newItem.description}
                            onChange={updateNewItem}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'Unit Cost'}
                            name={'unit_cost'}
                            onChange={updateNewItem}
                            value={newItem.unit_cost}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'Quantity'}
                            name={'quantity'}
                            onChange={updateNewItem}
                            value={newItem.quantity}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label={'Unit'}
                            name={'unit'}
                            onChange={updateNewItem}
                            value={newItem.unit}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShowModal(false)}>Close</Button>
                <Button variant={'contained'} onClick={() => addItem()} >Add Item</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddItemModal
