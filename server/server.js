const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');

const Product = require("./models/Product");

app.use(cors({
  origin: '*',  
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.json());

const connection_url = "mongodb+srv://hazalsuna8:12345@cluster0.cbpxn.mongodb.net/";

mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get("/", (req, res) => res.status(200).send("Ana Sayfa"));

app.get('/products', async (req, res) => {
  try {
    let query = {};
    
    if (req.query.categories) {
      query.category = { $in: req.query.categories.split(',') };
    }
    if (req.query.colors) {
      query['images.color'] = { $in: req.query.colors.split(',') };
    }
    if (req.query.brands) {
      query.brand = { $in: req.query.brands.split(',') }; 
    }
    if (req.query.sizes) {
      query.sizes = { $in: req.query.sizes.split(',').map(Number) };
    }
    if (req.query.activities) {
      query.activity = { $in: req.query.activities.split(',') };
    }
    
    if (req.query.q) {
      const searchRegex = new RegExp(req.query.q, 'i');
      query.$or = [
        { name: searchRegex },
        { brand: searchRegex },
        { activity: searchRegex},
        { ['images.color'] : searchRegex}
      ];
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));