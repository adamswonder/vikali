import React, { useEffect, useState } from "react";

function Review() {
    //Here I initialized states for the review section inputs
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    // Fetch posted reviews from input
    const [getReviews, setGetReviews] = useState([])

    // submit handler and post request
    function submitForm(event) {
        event.preventDefault();
        const formData = { rating, review }

        fetch(`http://localhost:9292/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((resp) => resp.json())
            .then(() => {
                setRating(0)
                setReview("")
            })
    }

    //Here we perform a get request using useEffect :)
    useEffect(() => {
        fetch(`http://localhost:9292/reviews`)
            .then((resp) => resp.json())
            .then((reviews) => {
                console.log(reviews)
                setGetReviews(reviews)
            })
    }, [])

    return (
        <>
            <div className="main-review-container">
                <h1 style={{ textAlign: "center" }}>Reviews</h1>
                <div className="review-container">
                    <div className="form-container">
                        <h3>Give Your Review</h3>
                        <form onSubmit={submitForm}>
                            <input type="number" value={rating} onChange={(event) => setRating(event.target.value)} placeholder="Rating on a scale of 5" aria-required />
                            <textarea
                                rows="10"
                                columns="60"
                                type="text"
                                value={review} onChange={(event) => setReview(event.target.value)} aria-required
                                placeholder="Wrtie Your Review"
                            />
                            <br></br>
                            <button id="submitButton" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="review-image">
                        <img src="https://i.pinimg.com/564x/7d/6c/28/7d6c288597c1d4b3fe872fde1282eec0.jpg" width={300}></img>
                    </div>
                </div>
                <div className="reviews">
                    {getReviews.map((review) => {
                        return (
                            // display every user review after mapping
                            <div>
                                <p key={review.id}>Rating: {review.rating}</p>
                                <p>Review: {review.review}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Review;