import React, { useState } from 'react';
import useProducts from '../../Hooks/Useproducts';

const Orders = () => {
    const [products,setproducts]=useProducts()
    return (
        <div>
            <h1>I am from orders:{products.length}</h1>
        </div>
    );
};

export default Orders;