const express = require('express');
const locationsData = require('./locationsData');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/locations', (req, res) => {
  const { query } = req.query;
  const data = locationsData[query] || [];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
