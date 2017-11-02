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
  static signin(req, res) {
    if (!req.body.username) {
      res.status(400).send('Uername required');
    }
    if (!req.body.password) {
      res.status(400).send('Password required');
    }
    Users.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      }
    })
      .then((users) => {
        if (!users) {
          return res.status(400).send({ error: 'username or password is invalid' });
        }
        if (users.password === req.body.password) {
          // const token = jwt.sign({}, process.fdl, expiresIn: 505)
          res.status(200).send({ message: 'You have successfully logged in.' });
        }
        res.status(400);
      })
      .catch(error => res.status(400).send({ error: error.message }));
  }
}
export default Recipe;
