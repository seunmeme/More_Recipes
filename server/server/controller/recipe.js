import recipes from '../models/data';
/**
 * @class Recipe
 */
class Recipe {
  /**
     * @returns {obj} recipes
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
  static getRecipe(req, res, next) {
    if (req.query.sort) {
      next();
    }
    return res.status(200).json({
      recipes
    });
  }
  static createRecipe(req, res) {
    recipes.push({
      id: recipes.length + 1,
      name: req.body.name,
      upvotes: 0,
      downvotes: 0,
      favorited: 0,
      views: 0,
      description: req.body.description,
      image: req.body.image,
      ingredients: req.body.ingredients,
      directions: req.bodydirections,
    });
    res.status(200).json({
      message: 'success',
      error: false
    });
  }
  static updateRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes[i].name = req.body.name;
        recipes[i].description = req.body.description;
        recipes[i].image = req.body.image;
        recipes[i].ingredients = req.body.ingredients;
        recipes[i].directions = req.body.directions;
        res.status(200).json({
          recipes,
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  static removeRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes.splice(i, 1);
        return res.status(200).json({
          message: 'deleted',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
      error: true
    });
  }
  static reviewRecipes(req, res) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].id === parseInt(req.params.recipeId, 10)) {
        recipes[i].reviews.push({ reviews: req.body.content });
        return res.status(200).json({
          recipes: recipes[i],
          message: 'success',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Content not found',
      error: true
    });
  }
  static sortRecipes(req, res) {
    recipes.sort((b, a) => a.upvotes - b.upvotes);
    return res.status(200).json({
      message: recipes
    });
  }
}
export default Recipe;
