import React, { useState } from 'react';

const App = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const recipeData = {
      recipeName, 
      ingredients,
      instructions,
      cookingTime, 
      difficultyLevel
    };

    // Make a POST request to the backend to submit the recipe
    fetch('/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Recipe submitted successfully:', data);
        setSubmissionStatus('Recipe submitted successfully!');
        
        // Clear form fields
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setCookingTime(''); 
        setDifficultyLevel(''); 
      })
      .catch((error) => {
        console.error('Error submitting recipe:', error);
        setSubmissionStatus('Error submitting recipe. Please try again.');
      });
  };

  
  

  return (
    <div>
      <h1>Submit a Recipe</h1>
      {submissionStatus && <p style={{color: submissionStatus.includes('Error') ? 'red' : 'green'}}>{submissionStatus}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Recipe Name:
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Ingredients:
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Instructions:
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cooking Time:
            <input
              type="text"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Difficulty Level:
            <select
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
            >
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default App;

