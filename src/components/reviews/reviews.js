import React, { useEffect, useState } from "react";



export const ReviewsList = () => {
    const [review, setReview] = useState([])



    const fetchReviews = () => {
        return fetch("http://localhost:8000/reviews", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }


    useEffect(() => {
        fetchReviews()
            .then((review) => {
                setReview(review)
            })
    },
        [])

    

        return (

            <div>
                <h2>Reviews</h2>
                {
                    review.map(
                        (reviewObject) => {
                            return <>
                                <p key={reviewObject.id}>{reviewObject.content}
                                </p>
                            </>
    
                        }
                    )
                }
    
    
            </div>
        )
    }
    