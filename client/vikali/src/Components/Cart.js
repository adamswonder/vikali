import React from 'react'
import ProductCard from './ProductCard'

function Cart() {
    return (
        <div className='product-container'>
            {products.filter((product) => product.discount >= 50)
            }
        </div>
    );
}

export default Cart