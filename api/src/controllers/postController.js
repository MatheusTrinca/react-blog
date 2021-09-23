import Category from '../models/Category';
import Post from '../models/Post';
import User from '../models/User';

module.exports = {
  async index(req, res) {
    const userId = req.query.user;
    const catId = req.query.cat;
    try {
      let posts;
      if (userId) {
        posts = await Post.findAll({
          where: {
            user_id: userId,
          },
          attributes: ['id', 'title', 'description', 'photo'],
          include: {
            model: Category,
            as: 'categories',
          },
        });
      } else if (catId) {
        const category = await Category.findByPk(catId, {
          include: {
            model: Post,
            as: 'posts',
            through: { attributes: [] },
          },
        });
        posts = category.posts;
      } else {
        posts = await Post.findAll({
          attributes: ['id', 'title', 'description', 'photo'],
          include: [
            {
              model: User,
              attributes: ['id', 'username', 'email', 'profile_pic'],
            },
            {
              model: Category,
              as: 'categories',
              attributes: ['id', 'name'],
              through: { attributes: [] },
            },
          ],
        });
      }
      return res.status(200).json(posts);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        errors: ['Server error'],
      });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID Missing'],
        });
      }
      const post = await Post.findByPk(id, {
        attributes: ['id', 'title', 'description', 'photo'],
        include: {
          model: User,
          attributes: ['id', 'username', 'email', 'profile_pic'],
        },
      });
      if (!post) {
        return res.status(400).json({
          errors: ['Post not found'],
        });
      }
      return res.json(post);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID Missing'],
        });
      }
      const post = await Post.findByPk(id, {
        include: {
          model: User,
        },
      });
      if (!post) {
        return res.status(400).json({
          errors: ['Post not found'],
        });
      }
      if (post.User.id !== req.user.id) {
        return res.status(403).json({
          errors: ['You have not permission to update this post'],
        });
      }
      const { categories, ...data } = req.body;
      const updatedPost = await post.update(data);
      if (categories && categories.length > 0) {
        updatedPost.setCategories(categories);
      }
      return res.status(200).json(updatedPost);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID Missing'],
        });
      }
      const post = await Post.findByPk(id, {
        include: {
          model: User,
        },
      });
      if (!post) {
        return res.status(400).json({
          errors: ['Post not found'],
        });
      }
      if (post.User.id !== req.user.id) {
        return res.status(403).json({
          errors: ['You have not permission to update this post'],
        });
      }
      await post.destroy();
      return res.status(200).json(null);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
  async store(req, res) {
    try {
      const userId = req.user.id;
      const { categories, title, description, photo } = req.body;
      const newPost = await Post.create({
        title,
        description,
        photo,
        user_id: userId,
      });
      if (categories && categories.length > 0) {
        newPost.setCategories(categories);
      }
      return res.status(201).json(newPost);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
};
