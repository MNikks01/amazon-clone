import React, { useState } from 'react'
import Header from '../Components/Header'
import '../App.css'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'

function Basket() {

    const cartItems = useSelector((state) => state.basket.items)

    const total = cartItems.reduce((total, item) => total + item.price, 0)

    return (
        <div>
            <Header />

            <div className='cartPage'>
                <div className='cartData'>
                    <div className='cartMessage'>
                        {
                            cartItems.length > 0 ?
                                <h1>Number of items in basket: {cartItems.length}</h1> :
                                <h1>Your Basket is empty.</h1>
                        }
                    </div>
                    <div className="cart">
                        {
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='total'>
                    <h1>Total</h1>
                    <h2>$ {total}</h2>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Basket