import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2 className='order-title'>Orders List</h2>
            <h3 className='order-title'>Cart Item :  {cart.length}</h3>
        </div>
    );
};

export default Cart;