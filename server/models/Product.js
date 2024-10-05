const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  images: [{ 
    url: String,
    color: String 
  }],
  name: String,
  price: Number,
  brand: String,
  sizes: [Number],
  activity: String
});

module.exports = mongoose.model("Product", ProductSchema);