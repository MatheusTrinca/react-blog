// import bcrypt from 'bcryptjs';
import Post from '../models/Post';
import User from '../models/User';

module.exports = {
  async index(req, res) {
    // Desablilitar
    try {
      const users = await User.findAll({
        attributes: ['id', 'username', 'email', 'profile_pic'],
      });
      return res.status(200).json(users);
    } catch (error) {
      return res.json(null);
    }
  },

  async show(req, res) {
    // Desablilitar
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId, {
        attributes: ['id', 'username', 'email', 'profile_pic'],
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.json(null);
    }
  },

  // Loga o Usuário
  async store(req, res) {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({
        username,
        email,
        password,
      });
      const { id } = newUser;
      return res.status(201).json({
        id,
        username,
        email,
      });
    } catch (err) {
      return res.status(401).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    if (req.user.id !== +id) {
      return res.status(403).json({
        errors: ['Unauthorized'],
      });
    }
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }
      const updatedUser = await user.update(req.body);
      return res.status(200).json({
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        errors: ['Internal error'],
      });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    if (req.user.id !== +id) {
      return res.status(403).json({
        errors: ['Unauthorized'],
      });
    }
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        errors: ['Internal error'],
      });
    }
  },
};
