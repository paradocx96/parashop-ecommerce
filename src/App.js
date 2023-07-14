import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavigationBar from "./components/header/NavigationBar";

export default function App() {
    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    );
}
