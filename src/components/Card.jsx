import React from 'react';
import '../assets/styles/Card.css';

const Card = ({user}) => {
  return (
      <div className="profile-card">
        <img
          className="profile-img"
          src={user.image} // Replace with the image URL or import the image
          alt="profile"
        />
        <div className="card-details">
          <h2 className="name">{user.name}</h2>
          <p className="location">{user.location}</p>
          <div className="tags">
          {user.tags.map((tag, index)=>(
            <span key={index+tag} className="tag">{tag}</span>
          ))}
          </div>
        </div>
      </div>
  );
};

export default Card;
