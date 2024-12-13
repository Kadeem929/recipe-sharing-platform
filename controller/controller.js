const recipeModel = require('models/recipe'); 

const recipeController = {

  postRecipe(res, req, next) {

    const { recipeName, ingredients, instructions, cookingTime, difficultyLevel } = req.body;

    if(!recipeName || !ingredients || !instructions || !cookingTime || !difficultyLevel) {

        return next({
            log: 'Malformed request received', 
            status: 400, 
            message: { err: 'Request is missing an input field'}, 
        }); 
    }

    // try {
    //     console.log('Attempting to create new recipe');
    //     const newRecipe = new Recipe({ name, ingredients, instructions });
    //     await newRecipe.save();
    //     console.log('Recipe saved successfully');
    //     res.status(201).json(newRecipe); 
    //   } catch (error) {
    //     console.error('Error in recipe creation:', error);
    //     res.status(400).json({ error: 'Failed to create recipe', details: error.message });
    //   }

    recipeModel.create({ recipeName, ingredients, instructions, cookingTime, difficultyLevel })
    .then((recipe) => {
        res.locals.newRecipe = recipe; 
        return next(); 
    })
    .catch((err) => {
        return next({
            log: `Error adding recipe to the database: ${err}`,  
            status: 500, 
            message: { err: 'Failed to add recipe to the database' }, 
        });
    });
  }, 


}

module.exports = recipeController; 