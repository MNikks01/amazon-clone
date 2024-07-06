import React, { useEffect, useState } from 'react'
import OneProduct from './OneProduct'
import '../App.css'

function ProductsList() {

    const [allProducts, setallProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setallProducts(data.products)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="allProducts" id="allProducts">
            {
                allProducts.map((product, i) => (
                    <OneProduct
                        key={i}
                        id={product.id}
                        category={product.category}
                        image={product.images[0]}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    />
                ))
            }
        </div>
    )
}

export default ProductsList