'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contents', [
      
      {
        img: 'https://avatars.mds.yandex.net/i?id=ae2d38b4ad245ad4160b7f201e3cae5e_l-9269645-images-thumbs&n=13',
        info: 'Теплота золота. Маятник турбийона, золото 750 пробы, сапфировое стекло, циферблат из эмали',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      {
        img: 'https://wallpapers.com/images/hd/bvlgari-maserati-watch-wls6rpyq1m2lbo1o.jpg',
        info: 'Холодный блеск вне времени. Титан 5-го класса, ручная скелетизация моста, двухголовая пружина, открытая спираль Бреге.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        img: 'https://wp-s.ru/wallpapers/0/1/456819272705694/shvejcarskie-chasy-na-ch-rnom-fone.jpg',
        info: 'Платина и огонь сапфиров. Платина 950, прозрачный сапфировый циферблат, ручная гравировка мостов',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },



      // {
      //   img: 'https://avatars.mds.yandex.net/i?id=2d766ed832e629f8941c7106caa17252df3f6af6-3721791-images-thumbs&n=13',
      //   info: 'Утонченная классика. Белая эмаль Grand Feu, колонное колесо хронографа, ручная гравировка мостов.',
      //   userId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },



    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contents', null, {});
  }
};
