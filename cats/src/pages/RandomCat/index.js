import React, { useState, useEffect } from "react";

export default function RandomCat() {
  const [randomCatImg, setRandomCatImg] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomCat = () => {
    setLoading(true);
    fetch(`https://aws.random.cat/meow`)
      .then((res) => res.json())
      .then((catInfo) => {
        setRandomCatImg(catInfo.file);
        setLoading(false)
      });
  };

  useEffect(() => {
      fetchRandomCat();
  }, []);

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div>
        {!loading ? (
          <div>
            <img src={randomCatImg} width="400px" alt="Cat" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}
