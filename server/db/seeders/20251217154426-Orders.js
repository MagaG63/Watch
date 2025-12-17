'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        name: 'Алексей Сидоров',
        email: 'alexey@example.com',
        phone: "79123456789", // Укажи реальный формат номера телефона, если нужно
        message: 'Хочу заказать 5 единиц товара А. Срочно!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ольга Кузнецова',
        email: 'olga@example.com',
        phone: "79234567890",
        message: 'Заказ на услугу Б. Нужно обсудить детали.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дмитрий Волков',
        email: 'dmitry@example.com',
        phone: "79345678901",
        message: 'Интересует оптовая покупка товара В. Прошу связаться.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
