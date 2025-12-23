import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`sure is Server running on http://localhost:${PORT}`);
});