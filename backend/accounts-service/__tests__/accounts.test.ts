import request from 'supertest';
import app from './../src/app';

describe('Testando rotas do accounts', () => {
    it('POST /accounts/ - Deve retornar statusCode 201', async () => {
        const payload = {
            id: 1,
            name: 'Alquimar',
            email: 'alquimars@gmail.com',
            password: '123456',
            status: 1
        };

        const resultado = await request(app)
            .post('/accounts/')
            .send(payload);
        
        expect(resultado.status).toEqual(201);
    });
});