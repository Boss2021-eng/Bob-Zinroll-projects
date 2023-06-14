import React from 'react';
// import image12 from './assets/images/image12.png';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={item.coverImg}
        // alt={item.imgAlt}
        // ratings={item.stats.ratings}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
