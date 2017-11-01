import db from '../models/index';

const Users = db.Users;

module.exports = {
  signup(req, res) {
    return Users
      .create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(404).send(error));
  },
  signin(req, res) {
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
        if (users.password === req.body.password) {
          res.status(200).send({ message: 'You have successfully logged in.' });
        }
        res.status(400);
      })
      .catch(error => res.status(400).send({error: 'invalid username or password'}));
  },
};

