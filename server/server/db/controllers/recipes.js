import db from '../models/index';


const { Recipes } = db;
/**
 * @class User
 */
class Recipe {
  /**
     * @returns {obj} recipe
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
  static create(req, res) {
    return Recipes
      .create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
      })
      .then(recipes => res.status(201).send(recipes))
      .catch(error => res.status(404).send(error));
  }
  static list(req, res) {
    return Recipes
      .all()
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send(error.message));
  }
}
export default Recipe;
