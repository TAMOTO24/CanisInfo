import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";

const DogCarousel = () => {
  const [dogData, setDogData] = useState([]);
  const [currentX, setCurrentX] = useState(0);
  const [loading, setLoading] = useState(false);
  const maxDogPictures = 10;
  const cardWidth = 208; // Width of each card including margin

  useEffect(() => {
    setLoading(true);
    const headers = new Headers({
      "Content-Type": "application/json",
      "X-Api-Key": "live_AULkEfdREp7I42DXMGfukWeWoJHAOhqL0PPQyU52CC9wVqMjojM90aiLdEMAJKVD",
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
    if (currentX < (dogData.length - 6) * (cardWidth)) {
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
      <div className="relative max-h-[288px] w-[60%] mx-auto">
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
            className="flex gap-2 px-10 py-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentX}px)`,
            }}
          >
            {dogData.map((dog) => (
              <div className="text-center flex-shrink-0 w-50" key={dog.id}>
                <div className="w-50 h-50 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={dog?.image?.url || "/default-dog-image.jpg"}
                    alt={dog?.name || "Dog"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-2xl font-semibold">
                  {dog?.name || "Unknown"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default DogCarousel;