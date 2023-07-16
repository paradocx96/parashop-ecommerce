import React from 'react';
import Products from "../components/products/Products";

function Home() {
    return (
        <div className="product-body">
            <div style={{height: '100px'}}/>
            <Products/>
        </div>
    );
}

export default Home;
