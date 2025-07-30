import React, { useState, useEffect } from 'react';

function OnLoadNine() {
  const [ imageUrl, setImageUrl] =useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setImageUrl(data.message);
    }
    fetchDogImage();
  }, [])

  return (
    <div>
      <h1> Attempt 9</h1>
      <h2>Random Dog</h2>
      {imageUrl ? (<img src={imageUrl} alt="Random Dog Image" style={{width:"300px"}} />) : (<p> Loading...</p>)}
    </div>
  )
}

export default OnLoadNine