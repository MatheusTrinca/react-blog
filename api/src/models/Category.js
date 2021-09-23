import { Model, DataTypes } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo title deve ter entre 3 e 255 caracteres',
            },
          },
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Post, {
      through: 'post_categories',
      as: 'posts',
    });
  }
}
export default Category;
