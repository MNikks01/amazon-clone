import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/Slices/basketSlice'

function OneProduct(props) {

    const { id, category, image, title, description,
        price, rating } = props;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const oneProduct = {
            id, category, image, title, description,
            price, rating
        }
        dispatch(addToCart(oneProduct))
    }

    return (
        <div className="oneProduct">
            <p>{category}</p>

            <img
                src={image}
                alt={title}
            />

            <h1>{title}</h1>

            <h3>{description}</h3>

            <div className="priceNRating">
                <h2>$ {price}</h2>

                <h4>&star; {rating}</h4>
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default OneProduct