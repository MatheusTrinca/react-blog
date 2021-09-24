import Category from '../models/Category';

module.exports = {
  async store(req, res) {
    try {
      const newCat = await Category.create(req.body);
      return res.status(201).json(newCat);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
  async index(req, res) {
    try {
      const cats = await Category.findAll();
      return res.status(200).json(cats);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  },
};
