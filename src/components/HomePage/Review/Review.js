import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Review = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('https://immense-bayou-68819.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <section className="review mt-5">
             <h1 style={{color: 'red', fontWeight:'bold'}} className="text-uppercase text-center">Reviews</h1>
           <div className="style">
               <div className="card-deck">
               {
                    reviews.map(review => <ReviewDetails review={review} key={review.name} />)
                }
               </div>
           </div>
       </section>
    );
};

export default Review;