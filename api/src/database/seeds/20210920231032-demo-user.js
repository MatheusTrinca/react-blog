const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Matheus 1',
          email: 'matheus1@gmail.com',
          profile_pic:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
          password_hash: await bcryptjs.hash('teste123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Matheus 2',
          email: 'matheus2@gmail.com',
          profile_pic:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
          password_hash: await bcryptjs.hash('teste123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Matheus 3',
          email: 'matheus3@gmail.com',
          profile_pic:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
          password_hash: await bcryptjs.hash('teste123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
