import bcrypt from 'bcrypt';
import db from '../models/index';

const saltRounds = 10;

const { Users } = db;
/**
 * @class User
 */
class User {
  /**
     * @returns {obj} users
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
  static signup(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ error: `an error occured ${err}` });
      }
      return Users
        .create({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: hash,
          confirmPassword: hash,
        })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(404).send(error));
    });
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
export default User;
