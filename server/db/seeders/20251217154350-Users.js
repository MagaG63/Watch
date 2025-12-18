'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Кирилл Лукичев',
        email: 'kirill@example.com',
        hashpass: '$2a$10$N9qo8uLOickgx2ZMRZoMy...', // Замени на реальный хеш пароля
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
