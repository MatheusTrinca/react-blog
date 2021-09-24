module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Life',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sport',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tech',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Music',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Style',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cinema',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('categories', null, {}),
};
