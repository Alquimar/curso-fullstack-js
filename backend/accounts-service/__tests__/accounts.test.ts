import request from 'supertest';
import app from './../src/app';

describe('Testando rotas do accounts', () => {
    it('GET /accounts/ - Deve retornar statusCode 200', async () => {
        const resultado = await request(app)
            .get('/accounts/');
        
        expect(resultado.status).toEqual(200);
        expect(Array.isArray(resultado.body)).toBeTruthy();
    });

    it('POST /accounts/ - Deve retornar statusCode 201', async () => {
        const payload = {
            id: 1,
            name: 'Alquimar',
            email: 'alquimars@gmail.com',
            password: '123456'
        };

        const resultado = await request(app)
            .post('/accounts/')
            .send(payload);
        
        expect(resultado.status).toEqual(201);
        expect(resultado.body.id).toBe(1);
    });

    it('POST /accounts/ - Deve retornar statusCode 422', async () => {
        const payload = {
            id: 1,
            quadra: '404 Norte',
            cidade: 'Palmas',
            estado: 'TO'
        };

        const resultado = await request(app)
            .post('/accounts/')
            .send(payload);
        
        expect(resultado.status).toEqual(422);
    });

    it('GET /accounts/:id - Deve retornar statusCode 200', async () => {
        const resultado = await request(app)
            .get('/accounts/1');
        
        expect(resultado.status).toEqual(200);
        expect(resultado.body.id).toBe(1);
    });

    it('GET /accounts/:id - Deve retornar statusCode 404', async () => {
        const resultado = await request(app)
            .get('/accounts/2');
        
        expect(resultado.status).toEqual(404);
    });

    it('GET /accounts/:id - Deve retornar statusCode 400', async () => {
        const resultado = await request(app)
            .get('/accounts/abc');
        
        expect(resultado.status).toEqual(400);
    });
});