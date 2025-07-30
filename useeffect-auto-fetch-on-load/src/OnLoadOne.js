import React, { useState, useEffect } from "react";

function OnLoadOne() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      const data = await response.json();

      setImageUrl(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>OnLoad Attempt ONE</h1>
      <h2>Ok, so this is going to take a lot of attempts at explaining lol</h2>
      <h2>First</h2>
      <ol>
        <li>
          Create useState hook that holds imageUrl variable and setImageUrl
          setter function This will hold an empty string(a string the dog image
          URL). This line creates React state to hold the URL of the image we
          get from the API.
        </li>
      </ol>

      <h2>Second</h2>
      <ol>
        <li>
          Create useEffect hook with an empty dependency. The image should only
          load once on initial load and shouldnt afterwards
        </li>
        <li>Create a asynchronous function called fetchDogImage, </li>
        <li>
          Create an APi request to the Dog CEO endpoint to get a randow image.
          Use fetch with await to pause until the data comes back, and store the
          result in a variable called response{" "}
        </li>
        <li> call the setter function and set it to data.message </li>
        <li>call the fetchDogImage function</li>
      </ol>

      <h2>Third</h2>
      <ol>
        <li>set h2 element and set it to "Random Dog"</li>
        <li>Create a ternary conditional rendering expression if theres an img show img or show loading</li>
      </ol>
      <h2>Random Dog</h2>
      {imageUrl ? ( <img src={imageUrl} alt="A RAdom Dog" style={{ width: "300px"}} />
      ) : ( <p>Loading...</p>)}
    </div>
  );
}

export default OnLoadOne;
