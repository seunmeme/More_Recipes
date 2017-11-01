const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes API!',
  }));

  app.post('/api/users/signup', usersController.signup);
  app.post('/api/users/signin', usersController.signin);
};
