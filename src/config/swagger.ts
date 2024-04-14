import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Boilerplate',
      version: '0.1.0',
      description: 'Express API boilerplate and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Daniel Sepúlveda',
        url: '',
        email: 'dansepdev@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:4000/api/v1'
      }
    ]
  },
  apis: ['./api-documentation/*.yml', './src/api/routes/*.ts']
};

export const specs = swaggerJsdoc(options);
