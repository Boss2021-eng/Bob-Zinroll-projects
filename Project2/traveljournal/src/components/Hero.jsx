import React from 'react';
import data from '../data';
function Hero(props) {
  return (
    <section className="hero">
      <div className="hero--image-box">
        <img src={`images/${props.coverImg}`}
        
        alt={props.imgAlt} className="hero--image1"/>
      </div>
      <div className="hero--info">
        <div className="hero--location">
          <img src="images/location.png" className="hero--image2" />
          <span className="hero--country">{props.location}</span>
          <span className="hero--view"> <a href={`${props.googleMapUrl}`}>View on Google maps</a> </span>
        </div>

        <h3 className="hero--header"> {props.title} </h3>
        <h5 className="hero--date">
          {props.startDate} - {props.endDate}
        </h5>
        <p className="hero--text">{props.description}</p>
      </div>
    </section>
  );
}

export default Hero;
