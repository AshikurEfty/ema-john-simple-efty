import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {initialCart} = useLoaderData(); //{products: products, initialCart: initialCart};

    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 className='now-shop'>No Itmes for Review. Please <Link to="/">Shope More</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Orders;