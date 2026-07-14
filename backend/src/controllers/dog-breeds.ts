import * as breedService from "../services/breedsService.js";
import type { Request, Response, NextFunction } from "express";

export const getBreeds = async (req: Request, res: Response, next: NextFunction) => {
  const breeds = await breedService.getBreeds();

  if (!breeds) return next(new Error("No breeds found"));

  res.json(breeds);
};

export const getBreedById = async (req: Request, res: Response, next: NextFunction) => {
  const { breedId } = req.params;

  if (!breedId) return next(new Error("There is no such breed id!"));

  if (typeof breedId !== "string") return next(new Error("Breed id must be a string!"));
  const idBreed = await breedService.getBreedById(breedId);

  res.json(idBreed);
};

export const createBreed = async (req: Request, res: Response, next: NextFunction) => {
  const newBreed = await breedService.createBreed({
    name: "Maine Coon",
    description:
      "Large and friendly cat breed known for its intelligence and sociable nature.",
    origin: "United States",
    temperament: "Gentle, Playful, Intelligent",
    life_span: "12-15 years",
    image_url: "https://example.com/images/maine-coon.jpg",
    category: "Domestic"
  });

  if (!newBreed) return next(new Error("Failed to create breed"));

  res.status(201).json(newBreed);
};
