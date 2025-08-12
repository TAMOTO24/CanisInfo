const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received', yourData: req.body });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
