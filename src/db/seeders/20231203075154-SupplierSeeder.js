'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Suppliers', [
      {
        name: 'PT MotoFast Prima Sukses',
        email: 'test@mail.com',
        phone: '012',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'InaExport',
        email: 'test@mail.com',
        phone: '013',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hamatetsu Indonesia',
        email: 'test@mail.com',
        phone: '014',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Mikuni Indonesia',
        email: 'test@mail.com',
        phone: '015',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kawasaki Motor Indonesia',
        email: 'test@mail.com',
        phone: '016',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Youngjin Sport Indonesia',
        email: 'test@mail.com',
        phone: '017',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Honda Trading Indonesia',
        email: 'test@mail.com',
        phone: '018',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PT Amico Multi Global',
        email: 'test@mail.com',
        phone: '019',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Citra Karya Pranata',
        email: 'test@mail.com',
        phone: '020',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Suppliers', null, {});
  }
};
