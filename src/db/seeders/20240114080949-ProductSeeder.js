'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product', [
      {
        name: 'Durian Musang King',
        price: 120000,
        weight: 2,
        status: 1,
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Durian Duri Hitam',
        price: 100000,
        weight: 3,
        status: 1,
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Durian Belanda',
        price: 50000,
        weight: 7,
        status: 2,
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product', null, {});
  },
};
