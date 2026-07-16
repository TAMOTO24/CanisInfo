"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import DogList from "@/components/DogList";
import BreedCategories from "@/components/BreedCategories";
import BreedNav from "@/components/BreedNav";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [listType, setListType] = useState("row");
  const [dogCategory, setDogCategory] = useState("all breeds");

  const fetchBreeds = async () => {
    try {
      const response = await axios.get("http://localhost:5002/breeds");
      setBreeds(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <div className="px-30 flex flex-col overflow-hidden h-full">
      <Breadcrumbs />
      <BreedNav listType={listType} setListType={setListType} />
      <div className="flex gap-5 p-[1%] h-full w-full">
        <BreedCategories
          setDogCategory={setDogCategory}
          dogCategory={dogCategory}
        />
        <DogList
          breeds={breeds}
          dogCategory={dogCategory}
          listType={listType}
        />
      </div>
    </div>
  );
}
