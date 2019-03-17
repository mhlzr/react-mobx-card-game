import { fetchPlayers, savePlayerSelection } from './players';
import { playersData, savePlayerPayload } from './__fixtures__/players.fixture';
import { Player } from '../models/Player';

describe('players', () => {

    beforeEach(() => {
        fetchMock.resetMocks()
    })

    it('fetches players from an api-endpoint', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(playersData));
        const players = await fetchPlayers();
        expect(fetchMock.mock.calls.length).toEqual(1);
    });

    it('maps the playersData to instances of the player-model', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(playersData));
        const players = await fetchPlayers();
        expect(players[0]).toBeInstanceOf(Player);
        expect(players[players.length - 1]).toBeInstanceOf(Player);
    });

    it('sends a post request to store the player-selection', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ "status": "success" }));
        const response = await savePlayerSelection(savePlayerPayload);
        expect(response).toEqual({ status: 'success' });
        expect(fetchMock.mock.calls.length).toEqual(1);
    });

});
