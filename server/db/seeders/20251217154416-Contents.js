'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contents', [
      // Контент для пользователя с id=1 (Иван Иванов)
      {
        img: 'https://example.com/images/ivan1.jpg',
        info: 'Первое изображение Ивана: описание или информация.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://example.com/images/ivan2.jpg',
        info: 'Второе изображение Ивана: описание или информация.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Контент для пользователя с id=2 (Мария Петрова)
      {
        img: 'https://example.com/images/maria1.jpg',
        info: 'Первое изображение Марии: описание или информация.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Контент для пользователя с id=3 (Кирилл Лукичев)
      {
        img: 'https://example.com/images/kirill1.jpg',
        info: 'Первое изображение Кирилла: описание или информация.',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contents', null, {});
  }
};
