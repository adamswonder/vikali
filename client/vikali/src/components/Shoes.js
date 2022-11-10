import React from 'react'
// import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard'
import './Products.css'

function Shoes({ products, cartIt }) {
    return (
        <div className="prod-parent-container">
            <div className="product-container">
                {products
                    .filter((product) => product.category === "Shoes")
                    .map((product) => {
                        return <ProductCard product={product} cartIt={cartIt} />;
                    })}
            </div>
        </div>
    );
}

export default Shoes

