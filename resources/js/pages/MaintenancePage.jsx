import React, {useEffect, useState} from 'react';
import {
    AppBar, Autocomplete,
    Box,
    Button,
    Container,
    CssBaseline,
    Fab, Grid,
    InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import AddItemModal from '../components/maintenance/AddItemModal';
import {AddBox} from "@mui/icons-material";
const options = ['Item Code', 'Item Name'];

const MaintenancePage = () => {
    const [showModal, setShowModal] = useState(null);
    const [items, setItems] = useState();
    const [newItem, setNewItem] = useState({
        item_code : '',
        bar_code : '',
        name : '',
        description : '',
        unit_cost : 0,
        quantity : 0,
        unit : ''
    });

    const resetItemData = () => {
        setNewItem({
            item_code : '',
            bar_code : '',
            name : '',
            description : '',
            unit_cost : 0,
            quantity : 0,
            unit : ''
        });
    }

    const getItems = () => {
        axios.get('api/items')
            .then(res => {
                setItems(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addItem = () => {
        let newItemData = {
            'item_code' : newItem.item_code,
            'barcode' : newItem.bar_code,
            'name' : newItem.name,
            'description' : newItem.description,
            'unit_cost' : newItem.unit_cost,
            'total_qty' : newItem.quantity,
            'unit' : newItem.unit
        }
        axios.post('api/items', newItemData)
            .then(result => {
                console.log(result);
                resetItemData();
                setShowModal(false);
                getItems()
            })
            .catch(error => {
                console.log(error)
            })
    }


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
                                                <TableRow key={item.item_code}>
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
                    <AddBox/>
                </Fab>

                {/* Modal */}
                <AddItemModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    newItem={newItem}
                    updateNewItem={updateNewItem}
                    addItem={addItem}
                />
            </Container>
        </>
    )
}

export default MaintenancePage
