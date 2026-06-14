import { Router } from 'express';
import { getBreeds, getBreedById, createBreed } from '../controllers/dog-breeds.js';

const breedsRoutes = Router();

breedsRoutes.get('/breeds', getBreeds);
breedsRoutes.get('/breeds/:breedId', getBreedById);
breedsRoutes.post('/breeds', createBreed);

export default breedsRoutes;