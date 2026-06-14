import * as breedService from "../services/breedsService.js";

export const getBreeds = async (req, res, next) => {
  const breeds = await breedService.getBreeds();

  if (!breeds) return next(new Error("No breeds found"));

  res.json(breeds);
};

export const getBreedById = async (req, res, next) => {
  const { breedId } = req.params;

  if (!breedId) return next(new Error("There is no such breed id!"));

  const idBreed = await breedService.getBreedById(breedId);

  res.json(idBreed);
};

export const createBreed = async (req, res, next) => {
  const newBreed = await breedService.createBreed({
    name: "Maine Coon",
    description:
      "Large and friendly cat breed known for its intelligence and sociable nature.",
    origin: "United States",
    temperament: "Gentle, Playful, Intelligent",
    life_span: "12-15 years",
    image_url: "https://example.com/images/maine-coon.jpg",
  });

  if (!newBreed) return next(new Error("Failed to create breed"));

  res.status(201).json(newBreed);
};
