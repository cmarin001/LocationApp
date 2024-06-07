const express = require('express');
const cors = require('cors');
const path = require('path');
const locationsData = require('./locationsData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/locations', (req, res) => {
  const { query } = req.query;
  const data = locationsData[query] || [];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
