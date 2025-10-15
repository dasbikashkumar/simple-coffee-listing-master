import React from 'react';
import './CoffeeCard.css';

const CoffeeCard = ({ coffee }) => {
  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <div className="coffee-card">
      <div className="coffee-image-container">
        <img src={image} alt={name} className="coffee-image" />
        {popular && <span className="popular-tag">Popular</span>}
      </div>
      
      <div className="coffee-info">
        <div className="coffee-header">
          <h3 className="coffee-name">{name}</h3>
          <span className="coffee-price">{price}</span>
        </div>
        
        <div className="coffee-details">
          {rating ? (
            <div className="rating">
              <img src="/resources/Star_fill.svg" alt="star" className="star-icon" />
              <span className="rating-value">{rating}</span>
              <span className="votes">({votes} votes)</span>
            </div>
          ) : (
            <div className="rating">
              <img src="/resources/Star.svg" alt="star" className="star-icon empty" />
              <span className="no-rating">No ratings</span>
            </div>
          )}
          
          {!available && <span className="sold-out">Sold out</span>}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;