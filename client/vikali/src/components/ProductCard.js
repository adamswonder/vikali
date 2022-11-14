import React from 'react'
import { useState, useEffect } from 'react';
import "./Products.css"
import Popup from "./Popup";
import Review from './Review';

export default function ProductCard({ product, cartIt }) {
  const [isOpen, setIsOpen] = useState(false);

  // performs a side effect to post new reviews from addReview function 
  useEffect(() => {
    fetch("https://tranquil-hollows-52790.herokuapp.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify()
    });
  }, []);

  // toggle effect
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div class="product-card">
      <div class="product-image">
        <span class="discount-tag">{product.discount}% off</span>
        <img src={product.image} class="product-thumb" alt="" />
        <button class="card-btn" onClick={() => cartIt(product)}>Add to Cart</button>
      </div>
      <div class="product-info">
        <h2 class="product-brand">{product.title}</h2>
        <span class="price">${product.price}</span>
        <span class="actual-price">${product.actual_price}</span>

      </div>
      <button id='review-btn' onClick={togglePopup}>Add Review</button>
      {isOpen && <Popup
        content={<>
          <Review product={product} />
        </>}
        handleClose={togglePopup}
      />}
    </div>
  )
}

