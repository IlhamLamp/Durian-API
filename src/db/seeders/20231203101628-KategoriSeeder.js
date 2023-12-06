'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategoris', [
      {
        nama: 'Mesin',
        keterangan: ''
      },
      {
        nama: 'Kelistrikan',
        keterangan: ''
      },
      {
        nama: 'Rangka & Suspensi',
        keterangan: ''
      },
      {
        nama: 'Kopling & Transmisi',
        keterangan: ''
      },
      {
        nama: 'Brems & Rem',
        keterangan: ''
      },
      {
        nama: 'Eksterior',
        keterangan: ''
      },
      {
        nama: 'Interior',
        keterangan: ''
      },
      {
        nama: 'Lain-lain',
        keterangan: ''
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategoris', null, {});
  }
};
