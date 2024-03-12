import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle,
    Fab, Grid,
    InputLabel, MenuItem, Modal, Paper, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import AddItemModal from '../components/maintenance/AddItemModal';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const MaintenancePage = () => {
    const [showModal, setShowModal] = useState(null);
    const [items, setItems] = useState();
    const [newItem, setNewItem] = useState({
        item_code : '',
        bar_code : '',
        name : '',
        decription : '',
        unit_cost : 0,
        quantity : 0,
        unit : ''
    });
    const [modalView, setModalView] = useState(false);

    const getItems = () => {
        axios.get('api/items')
            .then(res => {
                setItems(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleContextMenu = (event) => {
        event.preventDefault();
        setShowModal(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setModalView(false);
    };

    const updateNewItem = (e) => {
        const { name, value } = e.target;
        if (name === 'unit_cost' && isNaN(value)) {
            return;
        }
        if (name === 'quantity' && isNaN(value)) {
            return;
        }
        setNewItem({ ...newItem, [name]: value });
        console.log(newItem);
    };

    const open = Boolean(setShowModal);

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
                            Maintenance
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container sx={{mt: 3}}>

                {/* Top Components */}
                <form>
                    <Grid container alignItems={'center'} spacing={2}>
                        <Grid item>
                            <InputLabel>Search Items</InputLabel>
                        </Grid>
                        <Grid item>
                            <TextField sx={{height: 'auto', fontSize: '0.8rem'}} variant={'outlined'} size={'small'}/>
                        </Grid>
                        <Grid item>
                            <TextField sx={{height: 'auto', fontSize: '0.8rem'}} variant={'outlined'} size={'small'}/>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'}>Search Barcode</Button>
                        </Grid>
                    </Grid>
                </form>

                {/* Main Table */}
                <Paper sx={{ mt: 3, width: '100%', overflow: 'auto' }}>
                    <TableContainer sx={{ maxHeight: 780}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Item Code</b></TableCell>
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell><b>Description</b></TableCell>
                                    <TableCell><b>Price</b></TableCell>
                                    <TableCell><b>Quantity</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    !items ? <TableRow><p>Loading...</p></TableRow> :
                                        items.map((item) => {
                                            return(
                                                <TableRow key={item.item_code} onContextMenu={handleCloseMenu}>
                                                    <TableCell>{item.item_code}</TableCell>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.description}</TableCell>
                                                    <TableCell>₱{item.unit_cost}</TableCell>
                                                    <TableCell>{item.total_qty}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/*<Popover*/}
                    {/*    anchorEl={showMenu}*/}
                    {/*    open={open}*/}
                    {/*    onClose={handleCloseMenu}*/}
                    {/*>*/}
                    {/*    <MenuItem onClick={handleCloseMenu}>Update</MenuItem>*/}
                    {/*    <MenuItem onClick={handleCloseMenu}>Delete</MenuItem>*/}
                    {/*</Popover>*/}
                </Paper>

                <Fab
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        right: 60
                    }}
                    color={"primary"}
                    onClick={() => setShowModal(true)}
                >
                    +
                </Fab>

                {/* Modal */}
                <AddItemModal 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    newItem={newItem}
                    updateNewItem={updateNewItem}
                />
            </Container>
        </>
    )
}

export default MaintenancePage
