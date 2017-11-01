import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/index';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('json spaces', 4);
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Connected!'
}));

require('./server/db/routes')(app);
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to More Recipes API!'
}));


export default app;
