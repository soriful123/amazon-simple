import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='pro-price'>Price: ${price}</p>
                <p className='pro-info'>Manufactured: {ratings}</p>
                <p className='pro-info'>Ratings: {ratings}</p>
            </div>

            <button onClick={() => props.handleAddToCart(props.product)} className='buy-now-btn'>Buy Now</button>

        </div>
    );
};

export default Product;