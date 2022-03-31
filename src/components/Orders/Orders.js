import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/UseCart';
import useProducts from '../../Hooks/Useproducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products,setproducts]=useProducts()
    const [cart,setCart]=useCart(products)
    const handleremoveorder=(product)=>{
        const rest=cart.filter(pd=>pd.id !==product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product=><ReviewItem key={product.id} product={product} handleremoveorder={handleremoveorder}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;