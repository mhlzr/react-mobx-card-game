import { CardGameStore } from './CardGameStore';
import { Player } from '../models/Player';

const mockPlayer = new Player({ name: 'Testname', alias: 'Testalias', asset: 'TestAsset' });

describe('CardGameStore', () => {
    it('keeps a reference to a selected player', () => {
        const store = new CardGameStore();
        expect(store.player).toBe(null);
        store.player = mockPlayer;
        expect(store.player).toBe(mockPlayer);
    })
});
