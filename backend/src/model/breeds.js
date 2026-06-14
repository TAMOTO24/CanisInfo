import mongoose from 'mongoose';

const breedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  origin: { type: String, required: true },
  temperament: { type: String, required: true },
  life_span: { type: String, required: true },
  image_url: { type: String, required: true }
});

export const Breeds = mongoose.model('breeds', breedSchema);