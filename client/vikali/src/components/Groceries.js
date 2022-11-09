import React from 'react'
import ProductCard from './ProductCard';
import "./Products.css"

function Groceries({ products, cartIt }) {
  return (
    <div className="prod-parent-container">
      <div className="product-container">
        {products
          .filter((product) => product.category === "Groceries")
          .map((product) => {
            return <ProductCard product={product} cartIt={cartIt} />;
          })}
      </div>
    </div>
  );
}

export default Groceries