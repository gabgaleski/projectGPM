import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('cars', [
      {
        name: 'Renault Kwid',
        status: 0,
        description: 'Carro ideal para a familia',
        brand: 'Renault',
        images: 'https://w7.pngwing.com/pngs/217/579/png-transparent-renault-kwid-car-dacia-logan-fiat-mobi-renault-compact-car-car-vehicle.png',
        value: 58.99
      },
      {
        name: 'Fiat Mobi 1.0',
        status: 1,
        description: 'Carro ideal para a familia',
        brand: 'Fiat',
        images: 'https://production.autoforce.com/uploads/version/profile_image/9615/model_main_webp_comprar-trekking-1-0_26baeeef68.png.webp',
        value: 63.25
      },
      {
        name: 'Fiat Argo 1.0',
        status: 1,
        description: 'Carro',
        brand: 'Fiat',
        images: 'https://production.autoforce.com/uploads/version/profile_image/8015/comprar-drive-1-0_e7dee238c6.png',
        value: 69.86
      },
      {
        name: 'Hyundai HB20',
        status: 1,
        description: 'Carro',
        brand: 'Hyundai',
        images: 'https://carwaysul.com.br/storage/app/uploads/public/638/0aa/3e5/6380aa3e5ecd5400406634.png',
        value: 86.55
      },
      {
        name: 'Renault Logan 1.0',
        status: 1,
        description: 'Carro ideal para a familia',
        brand: 'Renault',
        images: 'https://brfrance.com.br/uploads/products/versions/renault-logan-branco-glacier.png',
        value: 159.90
      },
      {
        name: 'Peugeot 208 1.6',
        status: 1,
        description: 'Carro ideal para a familia',
        brand: 'Peugeot',
        images: 'https://peugeotlelac.com.br/wp-content/uploads/2022/03/style_azul.png',
        value: 115.74
      },
      {
        name: 'Peugeot 2008 1.6',
        status: 1,
        description: 'Carro ideal para a familia',
        brand: 'Peugeot',
        images: 'https://production.autoforce.com/uploads/version/profile_image/7617/comprar-allure-1-6_b8c2a72a3b.png',
        value: 201.88
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars', {});
  },
}