import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', (req, res) => {
  res.send('Hello World');
});

export default app;
