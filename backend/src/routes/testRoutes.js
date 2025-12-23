import express from 'express';
import { testgetController } from '../controllers/testgetController.js';

const testRoutes = express.Router();

testRoutes.get('/testRouteGet', testgetController);

export default testRoutes;