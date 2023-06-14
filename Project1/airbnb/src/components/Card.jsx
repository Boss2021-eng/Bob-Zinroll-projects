import React from 'react';
import star from '../assets/images/star1.png';

function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 ? (
        <div className="card--badge">SOLD OUT </div>
      ) : props.location === 'Online' ? (
        <div className="card--badge">ONLINE </div>
      ) : (
        <div className="card--badge"> </div>
      )}
      <img
        src={`images/${props.coverImg}`}
        alt={props.imgAlt}
        className="card--image"
      />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.stats.ratings}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span className="gray">USA</span>
      </div>
      <p>{props.title} </p>
      <p>
        <span className="bold">{props.price}</span> / person{' '}
      </p>
    </div>
  );
}

export default Card;
