import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [dogImg, setDogImg] = useState(null);
  const [loading, setloading] = useState(false);

  const fetchDoggo = () => {
    setloading(true);
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
        setloading(false);
      });
  };

  useEffect(() => {
    fetchDoggo();
  }, []);

  return (
    <div>
      <header>
        <h3>Doggo of the day</h3>
        <div>
          <button onClick={fetchDoggo}>New Doggo</button>
        </div>
        {!loading ? (
          <div>
            <img src={dogImg} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;
