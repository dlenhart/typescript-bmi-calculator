import 'reflect-metadata';

import express from 'express';
import Container from 'typedi';
import BmiController from './controllers/BmiController';
import bodyParser from 'body-parser';

const main = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  const bmiController = Container.get(BmiController);

  app.get('/', (_req, res) => {
    res.send('BMI Calculator API');
  });

  app.post('/bmi', (req, res) => bmiController.calculate(req, res));

  app.listen(3000, () => {
    console.log('BMI Calculator server started!');
  });
};

main().catch((err) => {
  console.error(err);
});
