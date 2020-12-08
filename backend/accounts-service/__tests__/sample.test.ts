import { soma } from './../src/soma';

describe('Testando a função de soma', () => {
    it('Testando soma de 1 + 2, retorno deve ser 3', () => {
        const resultado = soma(1, 2);

        expect(resultado).toEqual(3);
    });
});