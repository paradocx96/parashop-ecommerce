import React from 'react';
import Products from "../components/products/Products";
import HomeCarousel from "../components/carousel/HomeCarousel";

function Home() {
    return (
        <div className="product-body">
            {/*<div style={{height: '100px'}}/>*/}

            <HomeCarousel/>

            <Products/>
        </div>
    );
}

export default Home;
