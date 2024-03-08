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
                </Route>
            </Routes>
            <FooterComponent/>
        </>
    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
