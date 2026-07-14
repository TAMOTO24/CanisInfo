import { Breeds } from "../model/breeds.js";

interface Breed {
  name: string;
  description: string;
  origin: string;
  temperament: string;
  life_span: string;
  image_url: string;
  category: string;
}

export const getBreeds = async () => {
  return await Breeds.find();
};

export const getBreedById = async (breedId:string) => {
  return await Breeds.findById(breedId);
};

export const createBreed = async (obj:Breed) => {
  const newbreed = new Breeds(obj);

  await newbreed.save();

  return newbreed;
};
