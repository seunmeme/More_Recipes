
import Recipe from '../controller/recipe';

export default (app) => {
  app.get('/api/recipes', Recipe.getRecipe);
  app.post('/api/recipes', Recipe.createRecipe);
  app.put('/api/recipes/:recipeId', Recipe.updateRecipes);
  app.delete('/api/recipes/:recipeId', Recipe.removeRecipes);
  app.get('/api/recipes/:recipeId', Recipe.retrieveRecipes);
};

