import React from 'react'
import ProductCard from './ProductCard';
import "./Products.css"

function Fashion({ products, cartIt }){
    return (
      <div className="prod-parent-container">
        <div className="product-container">
          {products
            .filter((product) => product.category === "Fashion")
            .map((product) => {
              return <ProductCard product={product} cartIt={cartIt} />;
            })}
        </div>
      </div>
    );
  }