const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

/**
 *  Vai executar antes do start dos testes
 */
describe('ONG', () => {
  beforeEach(async () => {
    // Antes de começar os teste, zerar o banco de dados
    await connection.migrate.latest();

    await connection.migrate.latest();
  });

  /**
   *  vai executar após todos os testes passarem
   */
  afterAll(async () => {
    await connection.destroy();
  });
 
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "OMS123",
        email: "omg@omg.com",
        whatsapp: "2198357211",
        city: "Rio de Janeiro",
        uf: "RJ"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})