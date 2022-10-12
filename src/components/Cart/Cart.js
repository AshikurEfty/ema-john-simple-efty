import React from 'react';

const Cart = ({cart}) => {
    // const {cart} = props;
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <h3>cart tumi aso</h3>
        </div>
    );
};

export default Cart;