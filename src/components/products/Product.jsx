import React from 'react';
import Typography from "@mui/material/Typography";
import {Button, Rating} from "@mui/material";
import {addToCart} from "../../state/actions/cartActions";
import {useDispatch} from "react-redux";
import './product.css'

function Product({product}) {
    const dispatch = useDispatch();
    const {id, title, price, image, category, description, rating} = product;

    return (
        <>
            <div className="product-box">
                {/* Product Image */}
                <div className="product-image">
                    <img src={image} alt={title}/>
                </div>

                {/* Product Rating */}
                <div className="product-rating">
                    <Rating name="half-rating" value={rating.rate} precision={0.5} readOnly/>
                    <Typography>4.9</Typography>
                </div>
                {/*<Typography variant="body2" color="text.secondary">{rating.count} ratings</Typography>*/}

                {/* Product Name */}
                <div className="product-title">{title}</div>

                {/* Product Category */}
                <div className="product-category">
                    <Typography color="text.secondary">{category}</Typography>
                </div>

                {/* Product Price */}
                <div className="product-price">
                    <Typography variant="h6">${price}</Typography>
                </div>

                {/* Add to Cart */}
                <div className="product-action">
                    <Button variant="contained" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                </div>
            </div>
        </>
    );
}

export default Product;
