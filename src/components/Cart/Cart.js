import React from 'react';
import './Cart.css'

const Cart = (props) => { 
    const {cart,clearCart,children} = props;


    let total = 0 ;
    let shipping = 0;
    let quantity = 0; 
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const taxNew = total * 0.1;
    const taxString = taxNew.toFixed(2);
    const tax = parseFloat(taxString);

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
            <button onClick={clearCart}>ClearCart</button>
            {children}
        </div>
    );
};

export default Cart;