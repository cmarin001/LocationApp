const express = require('express');
const cors = require('cors');
const path = require('path');
const countriesData = require('./countriesData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: 'GET,OPTIONS',
  allowedHeaders: 'Content-Type'
}));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/countries', (req, res) => {
  const countries = Object.keys(countriesData);
  res.json(countries);
});


app.get('/cities', (req, res) => {
  const { country } = req.query;
  const cities = country ? Object.keys(countriesData[country] || {}) : [];
  res.json(cities);
});


app.get('/places', (req, res) => {
  const { country, city } = req.query;
  const places = (country && city) ? (countriesData[country][city] || []) : [];
  res.json(places);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
