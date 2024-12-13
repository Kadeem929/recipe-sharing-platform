const express = require('express');
// const Recipe = require('../models/Recipe');  
const controller = require('../controller/controller'); 
const router = express.Router();


// console.log('Recipes router is being configured');

// POST route for adding a new recipe
router.post('/', controller.postRecipe, async (req, res) => {
  return res.status(200).json(res.locals.newRecipe)
  console.log('POST /recipes route hit');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);

  const { name, ingredients, instructions } = req.body;

  try {
    console.log('Attempting to create new recipe');
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    console.log('Recipe saved successfully');
    res.status(200).json(newRecipe); 
  } catch (error) {
    console.error('Error in recipe creation:', error);
    res.status(404).json({ error: 'Failed to create recipe', details: error.message });
  }
});

module.exports = router;




