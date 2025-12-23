import express from 'express';
import testRoutes from './testRoutes.js';

const routes = express.Router();

routes.use(testRoutes);
export default routes;