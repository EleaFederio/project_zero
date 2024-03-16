import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Container,
    CssBaseline, Fab,
    Grid,
    Toolbar,
    Typography
} from "@mui/material";
import SalesCart from "@/components/sales_register/SalesCart.jsx";
import SalesInventory from "@/components/sales_register/SalesInventory.jsx";

const SalesPage = () => {

    const [items, setItems] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [summary, setSummary] = useState({
        'tax'  : 0.00,
        'discount' : 0.00,
        'subTotal' : 0.00,
        'total' : 0.00
    });

    const getItems = () => {
        axios.get('api/items')
            .then(res => {
                setItems(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addToCart = (productFromProp) => {
        const check_index = cartItems.findIndex(item => item.id === productFromProp.id);
        if(check_index !== -1){
            cartItems[check_index].quantity++;
            setCartItems(cart => [...cartItems]);
        }else{
            setCartItems(cart => [...cartItems,  productFromProp]);
        }
    }

    const deleteProduct = (productId) => {
        const newProduct = cartItems.filter((item) => item.id !== productId);
        setCartItems(newProduct);
    }

    useEffect(() => {
        getItems();
        let subTotal = 0.0;
        cartItems.map((item) => (
            subTotal = subTotal + (item.price * item.quantity)
        ));
        const data = {
            'subTotal' : subTotal,
            'total' :  subTotal
        };
        setSummary(data);
    }, [cartItems])

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
                            Sales Register
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container sx={{mt: 5}} maxWidth={'xl'}>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <SalesInventory
                            items={items}
                            addToCart={addToCart}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <SalesCart
                            cartItems={cartItems}
                            summary={summary}
                            deleteProduct={deleteProduct}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SalesPage
