import { useEffect, useState } from 'react';

function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reviews')) || [];
    
    setReviews(stored);
  }, []);

  return (
    <div className='review-list'>
      <h1>All Movie Reviews</h1>
      {reviews.length === 0 ? (
        <p>No Reviews Submitted Yet</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className='review-card'>
              <strong>{review.name}</strong> reviewed <em>{review.movie}</em>
              <br />
              Rating: {review.rating}/5
              <br />
              
              {review.comment && <p>{review.comment}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Review;
