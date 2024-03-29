import React from 'react';
import {BuildRounded, Person, ReceiptLong, ShoppingCart} from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

const FooterComponent = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return(
        <BottomNavigation
            value={value}
            onChange={(event, value) => setValue(value)}
            style={{position: 'absolute', width: '100%', bottom: 0}}
        >
            <BottomNavigationAction label={'Maintenance'} icon={<BuildRounded/>} onClick={() => navigate('/')} />
            <BottomNavigationAction label={'Sales'} icon={<ShoppingCart/>}  onClick={() => navigate('/sales')}/>
            <BottomNavigationAction label={'Customer'} icon={<Person/>}  onClick={() => navigate('/customer')}/>
            <BottomNavigationAction label={'Reporting'} icon={<ReceiptLong/>}  onClick={() => navigate('/report')}/>
        </BottomNavigation>
    )
}

export default FooterComponent
