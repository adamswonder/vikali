import React from 'react'

function ProductCard({product, cartIt}) {
  return (
    <div class= "product-card">
      <div class="product-image">
        <span class="discount-tag">{product.discount}% off</span>
        <img src= {product.image} class="product-thumb" alt=""/>
        <button class="card-btn" onClick={() => cartIt(product)}>Add to Cart</button>
        </div> 
    </div>
  )
}

export default ProductCard