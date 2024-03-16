import './bootstrap';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {
    Container, createTheme,
} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MaintenancePage from "@/pages/MaintenancePage.jsx";
import SalesPage from "@/pages/SalesPage.jsx";
import FooterComponent from "@/components/FooterComponent.jsx";
import CustomerPage from "@/pages/CustomerPage.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import ReportPage from "@/pages/ReportPage.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: '#cccccc',
        },
    },
});

const App = () => {

    return(
        <>
            <Routes>
                <Route path={'/'}>
                    <Route index element={<MaintenancePage/>} />
                    <Route path={'/sales'} element={<SalesPage/>} />
                    <Route path={'/customer'} element={<CustomerPage/>} />
                    <Route path={'/report'} element={<ReportPage/>} />
                </Route>
            </Routes>
            <FooterComponent/>
        </>
    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LocalizationProvider>
)
