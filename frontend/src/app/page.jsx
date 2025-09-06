"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";

export default function Home() {
  const [dogData, setDogData] = useState([]);
  const [currentX, setCurrentX] = useState(0);
  const [loading, setLoading] = useState(false);
  const maxDogPictures = 10;
  const cardWidth = 320; // Width of each card including margin

  useEffect(() => {
    setLoading(true);
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
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, []);

  const handleScrollForward = () => {
    if (currentX < (maxDogPictures - 5) * cardWidth) {
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
    <Spin spinning={loading} tip="Loading data...">
      <div className="relative max-h-[288px] w-full max-w-[60%] mx-auto">
        <div>
          <button className="left-0 slider-button" onClick={handleScrollBack}>
            ◀
          </button>
          <button
            className="right-0 slider-button"
            onClick={handleScrollForward}
          >
            ▶
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="left-0 side-blur"
          ></div>

          <div
            className="right-0 bg-gradient-to-l side-blur"
          ></div>

          <div
            className="flex gap-4 px-10 py-6 transition-transform duration-500 ease-in-out"
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
    </Spin>
  );
}
