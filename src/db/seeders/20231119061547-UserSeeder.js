'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Nuryadi',
        email: 'ksabar@mail.com',
        address: 'rumah',
        born: '2000-01-01',
        roleId: 1,
        nik: 312010000,
        gender: 'L',
        phone: '088',
        password: 'yadi123',
        accessToken: '',
        verified: true,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
