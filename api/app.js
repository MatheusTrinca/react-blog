import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import userRoutes from './src/routes/userRoutes';
import authRoutes from './src/routes/authRoutes';
import postRoutes from './src/routes/postRoutes';
import categoryRoutes from './src/routes/categoryRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/categories', categoryRoutes);

export default app;

// instalar o Multer e fazer upload de foto
// 1 foto por post e 1 foto por user
