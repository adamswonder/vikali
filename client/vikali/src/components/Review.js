import React, { useEffect, useState } from "react";

function Review({ product }) {
  //Here I initialized states for the review section inputs
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  // Fetch posted reviews from input
  const [getReviews, setGetReviews] = useState([]);

  // submit handler and post request
  function submitForm(event) {
    event.preventDefault();
    const formData = {
      rating: rating,
      comment: review,
      product_id: product.id,
      user_id: 16,
    };
    console.log(formData);
    fetch(`https://tranquil-hollows-52790.herokuapp.com/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then(() => {
        setRating();
        setReview("");
      });
  }

  //Here we perform a get request using useEffect :)
  useEffect(() => {
    fetch(`https://tranquil-hollows-52790.herokuapp.com/reviews`)
      .then((resp) => resp.json())
      .then((reviews) => {
        setGetReviews(reviews);
      });
  }, []);

  return (
    <div className="review-body" style={{ textAlign: "center" }}>
      <div className="main-review-container">
        <h1>Reviews</h1>
        <div className="review-container">
          <div className="form-container">
            <h5>Give Your Review</h5>
            <form onSubmit={submitForm}>
              <label>Rating: </label>
              <br />
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating on a scale of 5"
                aria-required
              />
              <br />
              <label>Review: </label>
              <br />
              <textarea
                rows="10"
                columns="60"
                type="text"
                value={review}
                onChange={(event) => setReview(event.target.value)}
                aria-required
                placeholder="Write Your Review"
              />
              <br></br>
              <button id="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="review-image">
            {/* <img src="https://i.pinimg.com/564x/7d/6c/28/7d6c288597c1d4b3fe872fde1282eec0.jpg" width={300} alt="img"></img> */}
          </div>
        </div>
        <div className="reviews">
          {getReviews.map((review) => {
            return (
              // display every user review after mapping
              <div>
                <p key={review.id}>Rating: {review.rating}</p>
                <p>Review: {review.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
