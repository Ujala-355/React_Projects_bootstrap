import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(0); // Reset hover state when mouse leaves
  };

  return (
    <div className="star-rating d-flex justify-content-center my-5">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
                <FaStar
                    key={index}
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                />
        );
      })}
    </div>
  );
};

export default StarRating;
