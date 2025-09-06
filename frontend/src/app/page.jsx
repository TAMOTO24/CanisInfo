"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [dogData, setDogData] = useState([]);
  const [currentX, setCurrentX] = useState(0);
  const maxDogPictures = 5;
  const cardWidth = 320; // Width of each card including margin

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    });

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    axios
      .get(
        `https://api.thedogapi.com/v1/breeds?limit=${maxDogPictures}&page=0`,
        requestOptions
      )
      .then(async (response) => {
        const enrichedData = await Promise.all(
          response.data.map(async (dog) => {
            const wikiData = await searchInWikipedia(dog.name);
            return { ...dog, wikiExcerpt: wikiData };
          })
        );
        console.log(enrichedData);
        setDogData(enrichedData);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleScrollForward = () => {
    if (currentX < (maxDogPictures - 4) * cardWidth) {
      setCurrentX(currentX + cardWidth);
    }
  };

  const handleScrollBack = () => {
    if (currentX > 0) {
      setCurrentX(currentX - cardWidth);
    }
  };

  const searchInWikipedia = async (query) => {
    const response = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&explaintext=true&titles=${query}`
    );
    return response.data.query.pages;
  };

  return (
    <div className="relative w-full max-w-[60%] mx-auto">
      <div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-2 shadow rounded-full z-50"
          onClick={handleScrollBack}
        >
          ◀
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-3 py-2 shadow rounded-full z-50"
          onClick={handleScrollForward}
        >
          ▶
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 px-4 py-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentX}px)`,
          }}
        >
          {dogData.map((dog) => (
            <div className="text-center flex-shrink-0 w-72" key={dog.id}>
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg">
                <img
                  src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                  alt={dog?.name || "Dog"}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">
                {dog?.name || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
