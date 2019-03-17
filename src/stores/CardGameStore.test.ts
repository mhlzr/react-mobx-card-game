import { CardGameStore } from './CardGameStore';
import { Player } from '../models/Player';
import { fetchPlayers } from '../api/players';


jest.mock('../api/players', () => {
    fetchPlayers: { }
});

describe('CardGameStore', () => {

    let store: CardGameStore;

    beforeEach(() => {
        store = new CardGameStore();
    });

    it('keeps a reference to a selected player', () => {
        const mockPlayer = new Player({ name: 'Testname', alias: 'Testalias', asset: 'TestAsset' });
        expect(store.player).toBe(null);
        store.player = mockPlayer;
        expect(store.player).toBe(mockPlayer);
    });

    xit('calls the api to fetch the playerList', () => {
        store.fetchPlayers();
        expect(fetchPlayers).toHaveBeenCalled();
    });
});
