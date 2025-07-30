import React, { useState, useEffect } from "react";

const OnLoad = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message);
    };

    fetchDogImage(); // auto-fetch on component mount
  }, []);

  return (
    <div>
      <h2>Random Dog</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="A Random Dog" style={{ width: "300px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OnLoad;
