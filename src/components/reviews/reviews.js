import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export const Reviews = () => {
    const [review, setReview] = useState('')
    const history = useHistory();
    const fetchReviews = async () => {
        const apiCall = await fetch(`http://localhost:8088/reviews`);
        const data = await apiCall.json();
        
        }


useEffect(
    () => {
        fetchReviews();
    },
    [])


    const handleNameChange = event => {

        setReview(event.target.value)
    
      };

      const submitReview = (evt) => {
        evt.preventDefault()

        const NewReview = {
            reviewContent: review,
            userId: localStorage.getItem("user")
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewReview)
        }
        return fetch("http://localhost:8088/reviews", fetchOption)
        .then(response => response.json())
        .then(() => {
            fetchReviews();
        })
    }


    return (
        <>
            <h2>Reviews</h2>
            {
                review.map((reviewObject) => {
                    return (
                        <>
                            <p key={`review--${reviewObject.id}`}>{reviewObject.reviewContent}</p>
                            
                            
                                

                        </>


                    )
                }
                )}
                            <form className="ReviewForm">
                                <h2 className="ReviewForm__title"></h2>
                                <fieldset>
                                    <div className="form-group">
                                        <label>Reviews:</label>
                                        <input
                                            onChange={handleNameChange}

                                            value={review}

                                            required autoFocus
                                            type="text"
                                            className="form-control"
                                            placeholder="review" />
                                    </div>
                                </fieldset>
                            </form>
                            <button onClick={submitReview} className="btn btn-primary">
                Submit Review
            </button>
    </>
                )
                
            }
