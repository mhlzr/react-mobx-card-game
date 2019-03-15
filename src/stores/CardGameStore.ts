import { observable, flow, action, computed } from 'mobx';
import { Player } from '../models/Player';
import { fetchPlayers, savePlayerSelection } from '../api/players';

export enum PLAYER_SORTATION {
    ASCENDING,
    DESCENDING
}

export class CardGameStore {

    @observable _players: Array<Player> = [];

    @observable playerSortation: PLAYER_SORTATION | null = null;
    @observable player: Player | null = null;

    @observable isFetching: Boolean = false;
    @observable isSaving: Boolean = false;


    fetchPlayers = flow(function* () {
        this.isFetching = true;

        try {
            this._players = yield fetchPlayers();
        }
        catch (error) {
            console.error('Could not fetch players');
        }
        finally {
            this.isFetching = false;
        }
    });

    savePlayerSelection = flow(function* () {
        this.isSaving = true;

        try {
            const response = yield savePlayerSelection();
            console.log('Done');
        }
        catch (error) {
            console.error('Could not save playerSelection');
        }
        finally {
            this.isSaving = false;
        }
    });

    @computed get players() {
        switch (this.playerSortation) {
            case PLAYER_SORTATION.ASCENDING: return this._players.slice().sort(); break;
            case PLAYER_SORTATION.DESCENDING: return this._players.slice().sort().reverse(); break;
            default: return this._players;
        }
    }
}

export default new CardGameStore();
