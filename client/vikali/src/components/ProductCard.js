import React from 'react'
import { useState, useEffect } from 'react';
import { VStack, Box} from '@chakra-ui/react';
import "./Products.css"
import Popup from "./Popup";
import ReviewList from './ReviewList';
import AddReview from './AddReview'

export default function ProductCard({ product, cartIt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState('');

  // performs a side effect to post new reviews from addReview function 
  useEffect(() => {
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviews)
    });
  }, [reviews]);

  // toggle effect
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  // this function creates reviews to the database
  const addReview = (review) => {
    setReviews([...reviews, review])
  }

  // this function deletes a review from the database
  const deleteReview = (id) => {
    const newReviews = reviews.filter((review) => {
      return review.id !== id;
    });
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
          <VStack p='4'>
            <Box>
              {/* <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>Reviews</Heading> */}
            </Box>
            <ReviewList reviews={reviews} deleteReview={deleteReview} />
            <AddReview addReview={addReview} />
          </VStack>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  )
}

