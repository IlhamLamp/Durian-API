'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Fahmi Eko Putro Santoso',
        email: 'ksabar@mail.com',
        address: 'rumah',
        born: '2000-01-01',
        roleId: 1,
        nik: 312010046,
        gender: 'L',
        phone: '012',
        password: '',
        accessToken: '',
        verified: true,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Denas Aria Pamungkas',
        email: 'akumaulima@mail.com',
        address: 'rumah',
        born: '2000-02-01',
        roleId: 2,
        nik: 312010089,
        gender: 'L',
        phone: '088',
        password: '',
        accessToken: '',
        verified: true,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dimas Riyadh Alfajri',
        email: 'siapasangka@mail.com',
        address: 'rumah',
        born: '2000-03-01',
        roleId: 2,
        nik: 312010029,
        gender: 'L',
        phone: '088',
        password: '',
        accessToken: '',
        verified: true,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Febri Aditya',
        email: 'waduh@mail.com',
        address: 'rumah',
        born: '2000-04-01',
        roleId: 2,
        nik: 312010212,
        gender: 'L',
        phone: '088',
        password: '',
        accessToken: '',
        verified: true,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Muhammad Rifai Aditiya',
        email: 'well@mail.com',
        address: 'rumah',
        born: '2000-05-01',
        roleId: 3,
        nik: 312010065,
        gender: 'L',
        phone: '088',
        password: '',
        accessToken: '',
        verified: true,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ilham Nur Utomo',
        email: 'ayaya@mail.com',
        address: 'rumah',
        born: '2000-06-01',
        roleId: 3,
        nik: 312010129,
        gender: 'L',
        phone: '088',
        password: '',
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
