const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  }, 
  cookingTime: {
    type: Number,
    required: true
  }, 
  difficultyLevel: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);

