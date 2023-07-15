import React from 'react';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {clearCart, decrementItemQuantity, incrementItemQuantity, removeItem} from "../../state/actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector, cartTotalSelector} from "../../state/selectors/cartSelector";
import './cart.css';

function CartItems() {
    const cartItems = useSelector(cartSelector);
    const cartTotal = useSelector(cartTotalSelector);
    const dispatch = useDispatch();

    return (
        <div className="cart-container">
            {/* Cart Header */}
            <div className="cart-header">
                <Typography variant="h2" noWrap>Shopping Cart</Typography>
            </div>

            {/* Cart Items */}
            <div>
                {cartItems.items.length === 0 ? (
                    <div className="empty-cart">
                        <h3>Cart is empty</h3>
                        <Link to={'/'}>Start Shopping</Link>
                    </div>
                ) : (
                    <div>
                        {/*<div className="titles">*/}
                        {/*    <h3>Product</h3>*/}
                        {/*    <h3>Price</h3>*/}
                        {/*    <h3>Quantity</h3>*/}
                        {/*    <h3>Total</h3>*/}
                        {/*</div>*/}
                        <div className="cart-items">
                            {cartItems.items.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    {/* Product */}
                                    <div className="cart-product">
                                        <img src={item.image} alt={item.title}/>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="cart-product-price">{item.price}</div>

                                    {/* Quantity */}
                                    <div className="cart-product-quantity">
                                        <button onClick={() => dispatch(decrementItemQuantity(item.id))}>-</button>
                                        <div className="count">{item.quantity}</div>
                                        <button onClick={() => dispatch(incrementItemQuantity(item.id))}>+</button>
                                    </div>

                                    {/* Total Price */}
                                    <div className="cart-product-total-price">
                                        ${item.price * item.quantity}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sub Total Summary */}
            <div className="cart-summary">
                <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>

                <div className="cart-checkout">
                    {/* Sub Total Value */}
                    <div className="subtotal">
                        <span>Sub Total</span>
                        <span className="amount">${cartTotal}</span>
                    </div>
                    <p>Tax & Shipping Calculated are Free!</p>

                    {/* Checkout */}
                    <button>Checkout</button>

                    <div className="continue-shopping">
                        <Link to={'/'}>Continue Shopping</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartItems;
