module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          title: 'Post 1',
          description: 'This is the post 1 description',
          photo:
            'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Post 2',
          description: 'This is the post 2 description',
          photo:
            'https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Post 3',
          description: 'This is the post 3 description',
          photo:
            'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Post 4',
          description: 'This is the post 4 description',
          photo:
            'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Post 5',
          description: 'This is the post 5 description',
          photo:
            '"https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"',
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('posts', null, {}),
};
