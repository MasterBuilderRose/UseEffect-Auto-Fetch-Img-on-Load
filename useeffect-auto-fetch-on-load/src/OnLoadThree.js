import React, { useState, useEffect } from "react";

function OnLoadThree() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImageUrl(data.message);
    }

    fetchDogImage();
  },[])
  return (
    <div>
      <h1>Attempt Three: Load Image on Load</h1>
      <h2>First</h2>
      <ol>
        <li>Create an h1 element that displays the text "Random Dog"</li>
        <li>
          Create a jsx expression with a ternary conditional statement that
          displays the img or "Loading..."
        </li>
        <li>
          Create useState hook that holds imageUrl variable, setImageUrl setter
          function and its initial value set to empty string
        </li>
      </ol>
      <h1>Random Dog</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Dog Image" style={{ width: "300px" }} />
      ) : (
        <p> Loading...</p>
      )}

      <h1>Second</h1>
      <ol>
        <li>Create useEffect Hook</li>
        <li>inside the seEffect set an fetchDogImage async function</li>
        <li>create await fetch and save it under response variable</li>
        <li>convert to json</li>
        <li>invoke state setter function</li>
        <li>invoke fetchDogImage Async function</li>
      </ol>
    </div>
  );
}

export default OnLoadThree;
