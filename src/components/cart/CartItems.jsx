import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {clearCart, decrementItemQuantity, incrementItemQuantity, removeItem} from "../../state/actions/cartActions";
import {cartItemsCountSelector, cartSelector, cartTotalSelector} from "../../state/selectors/cartSelector";
import generatePDFInvoice from "../../pdf/generatePDFInvoice";


function CartItems() {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartSelector);
    const cartItemsCount = useSelector(cartItemsCountSelector);
    const cartTotal = useSelector(cartTotalSelector);

    const generatePDF = () => {
        event.preventDefault();

        let customer = {
            id: 'ORD001',
            customer: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                address: '123 Main Street, City, State, Country',
            }
        }

        generatePDFInvoice(customer, cartItems.items);
    }

    return (
        <div className="cart-container">
            {/* Cart Header */}
            <div className="cart-header">
                <Typography variant="h4" noWrap>
                    <p>Shopping Cart</p>
                </Typography>
            </div>

            {/* Cart Items */}
            <div className="cart-item-list">
                {cartItems.items.length === 0 ? (
                    // Empty Cart
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <ArrowBackIcon/>
                            </Link>
                            <Link to="/" style={{textDecoration:"none"}}>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="cart-items">
                            {cartItems.items.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    {/* Product */}
                                    <div className="cart-product">
                                        <img src={item.image} alt={item.title}/>
                                        <div>
                                            <div className="cart-item-title">{item.title}</div>
                                            <div className="cart-item-price">${item.price}</div>
                                            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                                        </div>
                                    </div>

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
                    <p>{cartItemsCount} Items</p>

                    {/* Checkout */}
                    <button onClick={() => generatePDF()}>Checkout</button>

                    <div className="continue-shopping">
                        <Link to={'/'} style={{textDecoration:"none"}}>
                            <div>Continue Shopping</div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartItems;
