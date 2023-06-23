import React, { useState } from 'react';

const StarRating = ({ratings, disabled = false}) => {
  const [rating, setRating] = useState(ratings);

  const handleStarClick = (selectedRating) => {
    if (disabled) return;
    setRating(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <span
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    {filled ? '★' : '☆'}
  </span>
);

export default StarRating;