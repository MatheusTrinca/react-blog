import jwt from 'jsonwebtoken';
import User from '../models/User';

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errors: ['invalid email or password'],
      });
    }
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(403).json({
          errors: ['invalid email or password'],
        });
      }
      if (!(await user.passwordIsValid(password))) {
        return res.status(403).json({
          errors: ['invalid email or password'],
        });
      }
      const { id, profile_pic } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.status(200).json({
        token,
        user: {
          username: user.username,
          email,
          profile_pic,
        },
      });
    } catch (err) {
      return res.staus(500).json({
        errors: ['Server error'],
      });
    }
  },
};
