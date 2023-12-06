'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Barangs', [
      {
        nama: 'Blok Mesin',
        kategori_id: 1,
        supplier_id: 5,
        status: true,
        harga: 5000000.00,
        stok: 25,
        deskripsi: 'Komponen utama mesin motor yang menampung silinder, piston, dan komponen mesin lainnya.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Piston',
        kategori_id: 1,
        supplier_id: 5,
        status: true,
        harga: 2000000.00,
        stok: 50,
        deskripsi: 'Komponen yang menutupi blok mesin dan menampung ruang bakar, katup, dan poros bubungan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Seher',
        kategori_id: 1,
        supplier_id: 4,
        status: true,
        harga: 500000.00,
        stok: 25,
        deskripsi: 'Komponen yang menghubungkan piston ke poros engkol untuk mentransmisikan tenaga.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Knalpot',
        kategori_id: 1,
        supplier_id: 5,
        status: true,
        harga: 175000.00,
        stok: 40,
        deskripsi: 'Komponen yang meredam suara ledakan mesin dan mengeluarkan gas buang.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Karburator',
        kategori_id: 1,
        supplier_id: 7,
        status: true,
        harga: 5000000.00,
        stok: 20,
        deskripsi: 'Komponen yang mencampur udara dan bahan bakar untuk mesin bensin.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Busi',
        kategori_id: 1,
        supplier_id: 6,
        status: true,
        harga: 15000.00,
        stok: 60,
        deskripsi: 'Komponen yang menyalakan campuran udara dan bahan bakar di dalam ruang bakar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Kabel',
        kategori_id: 2,
        supplier_id: 4,
        status: true,
        harga: 5000.00,
        stok: 70,
        deskripsi: 'Komponen yang menghantarkan arus listrik dari sumber listrik ke komponen kelistrikan lainnya.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Lampu',
        kategori_id: 2,
        supplier_id: 7,
        status: true,
        harga: 150000.00,
        stok: 35,
        deskripsi: 'Komponen yang menghasilkan cahaya untuk penerangan atau sinyal.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Accu',
        kategori_id: 2,
        supplier_id: 1,
        status: true,
        harga: 150000.00,
        stok: 60,
        deskripsi: 'Komponen yang menyimpan energi listrik untuk penggunaan saat dibutuhkan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Regulator',
        kategori_id: 2,
        supplier_id: 5,
        status: true,
        harga: 300000.00,
        stok: 50,
        deskripsi: 'Komponen yang mengatur tegangan listrik agar tetap stabil.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Shockbreaker',
        kategori_id: 3,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang meredam getaran dan guncangan saat berkendara.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Ban',
        kategori_id: 3,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang terbuat dari karet dan menutupi roda untuk memberikan traksi dan kenyamanan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Roda',
        kategori_id: 3,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang memungkinkan motor bergerak dan memindahkan tenaga.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Kopling',
        kategori_id: 4,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang menghubungkan dan memutus tenaga dari mesin ke transmisi.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Rantai',
        kategori_id: 4,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang menghubungkan gir primer di mesin dengan gir sekunder di roda belakang.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Gir',
        kategori_id: 4,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang berputar dan saling bersentuhan untuk mentransmisikan tenaga.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Kampas Rem',
        kategori_id: 5,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang berputar dan saling bersentuhan untuk mentransmisikan tenaga.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Spakbor',
        kategori_id: 6,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang melindungi pengendara dan motor dari kotoran dan air.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Jok',
        kategori_id: 6,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang memberikan tempat duduk yang nyaman bagi pengendara dan penumpang.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Spion',
        kategori_id: 6,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang membantu pengendara melihat ke belakang.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Meter',
        kategori_id: 7,
        supplier_id: 5,
        status: true,
        harga: 1.00,
        stok: 25,
        deskripsi: 'Komponen yang menampilkan informasi seperti kecepatan, putaran mesin, dan bahan bakar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Barangs', null, {});
  }
};
