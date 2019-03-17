import { Player } from './Player';
import { name, alias, asset } from './__fixtures__/player.fixture'

describe('Player', () => {
    it('accepts defined properties and stores them', () => {
        const player = new Player({ name, alias, asset });

        expect(player).toHaveProperty('name', name);
        expect(player).toHaveProperty('alias', alias);
        expect(player).toHaveProperty('asset', asset);
    });
});
