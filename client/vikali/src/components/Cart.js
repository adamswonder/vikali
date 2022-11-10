import React from 'react'
import ProductCard from './ProductCard'

function Cart({ products }) {
    return (
        <div className='prod-parent-container'>
            <div className='product-container'>
                {products.filter((product) => product.discount >= 50)
                    .map((product) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
            </div>
        </div>
    );
}

export default Cart