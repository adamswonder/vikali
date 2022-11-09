import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard'
import './Product.css'



function Shoes({ products, cartIt }) {
    return (
        <div className="product-container">
            {products
                .filter((product) => product.category === "Shoes")
                .map((product) => {
                    return <ProductCard product={product} cartIt={cartIt} />;
                })}
        </div>
    );
}

export default Shoes

