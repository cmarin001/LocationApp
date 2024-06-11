const express = require('express');
const cors = require('cors');
const path = require('path');
const countriesData = require('./countriesData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/countries', (req, res) => {
  try {
    const countries = Object.keys(countriesData);
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cities', (req, res) => {
  try {
    const { country } = req.query;
    if (!country || !countriesData[country]) {
      return res.status(400).json({ error: 'Country not found' });
    }
    const cities = Object.keys(countriesData[country]);
    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/places', (req, res) => {
  try {
    const { country, city } = req.query;
    if (!country || !countriesData[country]) {
      return res.status(400).json({ error: 'Country not found' });
    }
    if (!city || !countriesData[country][city]) {
      return res.status(400).json({ error: 'City not found' });
    }
    const places = countriesData[country][city];
    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
