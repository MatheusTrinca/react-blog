import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import multer from 'multer';
import userRoutes from './src/routes/userRoutes';
import authRoutes from './src/routes/authRoutes';
import postRoutes from './src/routes/postRoutes';
import categoryRoutes from './src/routes/categoryRoutes';
import isLoggedIn from './src/middlewares/isLoggedIn';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/images');
  },
  filename: (req, file, cb) => {
    cb(null, 'hello.jpg');
  },
});

const upload = multer({ storage });

app.use('/api/upload', isLoggedIn, upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

export default app;

// instalar o Multer e fazer upload de foto
// 1 foto por post e 1 foto por user
