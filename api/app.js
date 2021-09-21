import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import userRoutes from './src/routes/userRoutes';
import authRoutes from './src/routes/authRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

export default app;
