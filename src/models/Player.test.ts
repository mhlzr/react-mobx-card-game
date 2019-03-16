import { Player } from './Player';

describe('Player', () => {
    it('accepts defined properties and stores them', () => {
        const name = 'Testname';
        const alias = 'Testalias';
        const asset = 'Testasset';
        const player = new Player({ name, alias, asset });

        expect(player).toHaveProperty('name', name);
        expect(player).toHaveProperty('alias', alias);
        expect(player).toHaveProperty('asset', asset);
    });
});
