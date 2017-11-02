import User from '../controllers/users';
import Recipe from '../controllers/recipes';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes API!',
  }));

  app.post('/api/users/signup', User.signup);
  app.post('/api/users/signin', User.signin);
  app.post('/api/recipes', Recipe.create);
  app.get('/api/recipes', Recipe.list);
};
