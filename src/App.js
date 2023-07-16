import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavigationBar from "./components/header/NavigationBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";

export default function App() {
    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/cart" element={<Cart/>}/>

                {/*  Page Not Found Route  */}
                <Route path="*" element={<h1>Page Not Found</h1>}/>
            </Routes>
            <Footer/>
        </>
    );
}
