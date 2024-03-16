import React, {useEffect, useState} from 'react';
import {AppBar, Box, Container, CssBaseline, Fab, Grid, Toolbar, Typography} from "@mui/material";
import {PersonAdd} from "@mui/icons-material";
import CustomerList from "@/components/customer/CustomerList";
import NewCustomerModal from "@/components/customer/NewCustomerModal.jsx";
import CustomerDetailsCard from "@/components/maintenance/CustomerDetailsCard.jsx";

const CustomerPage = () => {
    const [showCustomerModal, setShowCustomerModal] = useState(false);
    const [newCustomer, setNewCustomer] = useState({
        area : '',
        price_level : '',
        customer_type : '',
        firstname : '',
        lastname : '',
        middle_name : '',
        address : '',
        date_of_birth : null,
        place_of_birth : '',
        sex : '',
        citizenship : '',
        occupation : '',
        tin : '',
        company_name : '',
        company_address : '',
        business_nature : ''
    })

    const updateNewCustomerState = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
        console.log(newCustomer);
    };

    return(
        <>
            <CssBaseline />
            <Box sx={{flexGrow: 1}}>
                <AppBar position={'static'}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            component={'div'}
                            sx={{ flexGrow: 1 }}
                        >
                            Manage Customer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Content */}
            <Container>
                <Grid container spacing={2} sx={{mt: 3}}>
                    <Grid item xs={6}>
                        <CustomerList/>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomerDetailsCard/>
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
                onClick={() => setShowCustomerModal(true)}
            >
                <PersonAdd/>
            </Fab>

            <NewCustomerModal
                showCustomerModal={showCustomerModal}
                setShowCustomerModal={setShowCustomerModal}
                newCustomer={newCustomer}
                setNewCustomer={setNewCustomer}
                updateNewCustomerState={updateNewCustomerState}
            />
        </>
    )
}

export default CustomerPage
