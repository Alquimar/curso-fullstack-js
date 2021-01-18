import request from 'supertest';
import app from './../src/app';
import accountsApp from '../../accounts-service/src/app';
import { IMessage } from '../src/models/message';
import repository from '../src/models/messageRepository';
import { send } from 'process';

const testEmail = 'jest@accounts.com';
const testPassword = '123456';
let jwt: string = '';
let testAccountId: number = 0;
let testMessageId: number = 0;

beforeAll(async () => {
    const testAccount = {
        name: 'Jest',
        email: testEmail,
        password: testPassword,
        domain: 'jest.com'
    };
    const accountResponse = await request(accountsApp)
        .post('/accounts/')
        .send(testAccount);
    console.log(`accountResponse: ${accountResponse.status}`);
    testAccountId = accountResponse.body.id;

    const loginResponse = await request(accountsApp)
        .post('/accounts/login')
        .send({
            email: testEmail,
            password: testPassword
        });
    console.log(`loginResponse: ${loginResponse.status}`);
    jwt = loginResponse.body.token;

    const testMessage = {
        accountId: testAccountId,
        body: "corpo da mensagem",
        subject: "assunto da mensagem"
    } as IMessage;

    const addResult = await repository.add(testMessage, testAccountId);
    console.log(`addResult: ${addResult}`);
    testMessageId = addResult.id!;
});

afterAll(async () => {
    const removeResult = await repository.removeById(testMessageId, testAccountId);
    console.log(`removeResult: ${removeResult}`);

    const deleteResponse = await request(accountsApp)
        .delete('/accounts/' + testAccountId)
        .set('x-access-token', jwt);
    console.log(`deleteResponse: ${deleteResponse.status}`);

    const logoutResponse = await request(accountsApp)
        .post('/accounts/logout')
        .set('x-access-token', jwt);;
    console.log(`logoutResponse: ${logoutResponse.status}`);
});

describe('Testando rotas do messages', () => {
    it('GET /messages/ - Deve retornar statusCode 200', async () => {
        const resultado = await request(app)
            .get('/messages/')
            .set('x-access-token', jwt);

        expect(resultado.status).toEqual(200);
        expect(Array.isArray(resultado.body)).toBeTruthy();
    });
});