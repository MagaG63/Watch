const bcrypt = require('bcrypt');
'use strict';




module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Кирилл Лукичев',
        email: 'kirill@example.com',
        hashpass: await bcrypt.hash("123", 10), // Замени на реальный хеш пароля
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
