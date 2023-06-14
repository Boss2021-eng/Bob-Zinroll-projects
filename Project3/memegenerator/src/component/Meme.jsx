import React, { useState, useEffect } from 'react';
import memeData from '../memeData';

function Meme() {
  //   const [memeImage, setmemeImage] = useState('images/memeimg.png');
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'images/memeimg.png',
  });
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMeme(data.data.memes);
    }

    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const memeUrl = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: memeUrl }));
    console.log(meme);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  console.log(meme);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top-text"
          value={meme.topText}
          onChange={handleChange}
          className="form--input"
          name="topText"
        />

        <input
          type="text"
          placeholder="Bottom-text"
          value={meme.bottomText}
          className="form--input"
          onChange={handleChange}
          name="bottomText"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--textTop">{meme.topText} </h2>
        <h2 className="meme--textBottom">{meme.bottomText} </h2>
      </div>
    </main>
  );
}

export default Meme;
