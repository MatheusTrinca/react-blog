import { Model, DataTypes } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo title deve ter entre 3 e 255 caracteres',
            },
          },
        },
        description: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo description deve ter entre 3 e 255 caracteres',
            },
          },
        },
        photo: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsToMany(models.Category, {
      through: 'post_categories',
      as: 'categories',
    });
  }
}
export default Post;
