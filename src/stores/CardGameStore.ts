import { observable, flow } from 'mobx';
import { Player } from '../models/Player';
import { fetchPlayers } from '../api/players';

export class CardGameStore {
    @observable player: Player | null = null;
    @observable players: Array<Player> = [];

    fetchPlayers = flow(function* () {
        try {
            this.players = yield fetchPlayers();
        }
        catch (error) {
            console.error('Could not fetch players');
        }

    })
}

export default new CardGameStore();
