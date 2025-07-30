import React, { useState, useEffect } from 'react'

function OnLoadSix() {
  const [ imageUrl, sestImageUrl]= useState("");


useEffect(() => {
const fetchDogImage = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  sestImageUrl(data.message);
}
fetchDogImage();

},[])



  return (
    <div>
      <h1>Attempt Six: Load Image on Initial Load</h1>
      <h2>Random Dog</h2>
      {imageUrl ? ( <img src={imageUrl} alt="Random Dog Image" style={{ width: "300px"}} />) : (<p> Loading...</p>)}
    </div>
  )
}

export default OnLoadSix