import React, {useEffect, useState} from "react";

function OnLoadTwo() {
  const [ imageUrl, setImageUrl ] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message);
    }

    fetchDogImage();
  },[])

  return (
    <div>
      <h1>Attempt Two</h1>
      <h2>First</h2>
      <ol>
        <li>H1 Element that holds "Random Dog" Title</li>
        <li>
          Set up JSX Expression that sets Ternary Conditional Rendering showing
          img or loading...
        </li>
        <li>
          Set up useStateHook That holds img variable and imageUrl setter
          function with initial valuse set to an empty string
        </li>
      </ol>
      <h1>Random Dog</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="A Random Dog" style={{ width: "300px" }} />
      ) : (
        <p>Loading Image</p>
      )}
      <h2>Second</h2>
      <ol>
        <li>Create a useEffect Hook</li>
        <li>Inside useEffect Hook Create an fetchDogImage async function</li>
        <li>fetch("https://dog.ceo/api/breeds/image/random")</li>
        <li>Convert to json</li>
        <li>set setImageUrl setter function</li>
        <li>invoke fetchDogImage asyns function</li>
        
      </ol>
    </div>
  );
}

export default OnLoadTwo;
