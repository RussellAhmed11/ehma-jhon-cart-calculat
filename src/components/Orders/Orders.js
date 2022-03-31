import React, { useState } from 'react';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/Useproducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products,setproducts]=useProducts()
    const [cart,setCart]=useCart(products)
    const handleremoveorder=(product)=>{
        const rest=cart.filter(pd=>pd.id !==product.id);
        setCart(rest)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product=><ReviewItem key={product.id} product={product} handleremoveorder={handleremoveorder}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;