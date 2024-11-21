import React from 'react';
import '../assets/styles/Card.css';

const Card = ({user}) => {
  return (
      <div className="profile-card">
        <img
          className="profile-img"
          src={user.image} 
          alt="profile"
        />
        <div className="card-details">
          <h2 className="name">{user.firstName}</h2>
          <p className="location">{user.address.address}</p>
          <div className="tags">
          <span className="tag">winter</span>
          <span className="tag">clothes</span>
          <span className="tag">food</span>
          </div>
        </div>
      </div>
  );
};

export default Card;
