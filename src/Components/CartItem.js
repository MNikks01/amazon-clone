import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/Slices/basketSlice';

function CartItem(props) {

    const { id, image, title, description, price, rating } = props

    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        const oneProduct = { id, image, title, description, price, rating }
        dispatch(removeFromCart(oneProduct))
    }


    return (
        <div className="cartItem">
            {/* image */}
            <img
                src={image}
                alt=""
            />
            <div className='cartItemData'>
                {/* title */}
                <h1>{title}</h1>

                {/* price */}
                <h2>$ {price}</h2>

                {/* description */}
                <p>{description}</p>

                {/* rating */}
                <Rating name="read-only" value={rating} readOnly />
            </div>

            {/* remove button */}
            <button onClick={handleRemoveItem}>Remove</button>
        </div>
    )
}

export default CartItem