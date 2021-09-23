module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'post_categories',
      [
        {
          category_id: 1,
          post_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_id: 1,
          post_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_id: 2,
          post_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) =>
    queryInterface.bulkDelete('post_categories', null, {}),
};
