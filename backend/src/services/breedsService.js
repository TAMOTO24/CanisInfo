import { Breeds } from "../model/breeds.js";

export const getBreeds = async () => {
  return await Breeds.find();
};

export const getBreedById = async (breedId) => {
  return await Breeds.findById(breedId);
};

export const createBreed = async (obj) => {
  const newbreed = new Breeds(obj);

  await newbreed.save();

  return newbreed;
};
