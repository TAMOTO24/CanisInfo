"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [dogData, setDogData] = useState(null);

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

    fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDogData(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    console.log(dogData);
  }, [dogData]);

  return (
    <div className="flex items-center justify-center min-h-screen py-2 gap-8 px-4">
      {dogData && (
        <>
          {dogData.map((dog) => (
            <div className="text-center" key={dog.id}>
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg">
                <img
                  src={dog.url}
                  alt={dog.breeds?.[0]?.name || "Dog"}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">
                {dog.breeds?.[0]?.name}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
