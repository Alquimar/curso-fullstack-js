import request from 'supertest';
import app from '../src/app';
import { IAccount } from '../src/models/account';
import repository from '../src/models/accountRepository';

const testEmail = 'jest@accounts.auth.com';
const hashPassword = '$2a$10$ye/d5KSzdLt0TIOpevAtde2mgreLPUpLpnE0vyQJ0iMBVeZyklKSi';
const testPassword = '123456';

beforeAll(async () => {
    const testAccount : IAccount = {
        name: 'Jest',
        email: testEmail,
        password: hashPassword,
        domain: 'jest.com'
    };
    const result = await repository.add(testAccount);
});

afterAll(async () => {
    const result = await repository.removeByEmail(testEmail);
});

describe('Testando rotas de autenticação', () => {
    it('POST /accounts/login - 200 OK', async () => {
        const payload = {
            email: testEmail,
            password: testPassword
        };

        const resultado = await request(app)
            .post('/accounts/login')
            .send(payload);
        
        expect(resultado.status).toEqual(200);
        expect(resultado.body.auth).toBeTruthy();
        expect(resultado.body.token).toBeTruthy();
    });

    it('POST /accounts/login - 422 Unprocessable Entity', async () => {
        const payload = {
            email: testEmail
        };

        const resultado = await request(app)
            .post('/accounts/login')
            .send(payload);
        
        expect(resultado.status).toEqual(422);
    });

    it('POST /accounts/login - 401 Unauthorized', async () => {
        const payload = {
            email: testEmail,
            password: testPassword+'1'
        };

        const resultado = await request(app)
            .post('/accounts/login')
            .send(payload);
        
        expect(resultado.status).toEqual(401);
    });

    it('POST /accounts/logout - 200 OK', async () => {
        const resultado = await request(app)
            .post('/accounts/logout');
        
        expect(resultado.status).toEqual(200);
    });
});