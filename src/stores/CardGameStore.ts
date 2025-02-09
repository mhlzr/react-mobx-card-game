import { observable, flow, computed, configure } from 'mobx';
import { Player } from '../models/Player';
import { fetchPlayers, savePlayerSelection, PlayerSelectionSavingPayload } from '../api/players';

/*configure({
    enforceActions: 'always'
});*/

export enum HTTP_STATUS_RESPONSE {
    SUCCESS = 'success',
    ERROR = 'error'
}

export enum PLAYER_SORTATION {
    ASCENDING,
    DESCENDING
}

export class CardGameStore {

    @observable _players: Array<Player> = [];

    @observable playerSortation: PLAYER_SORTATION | null = null;
    @observable player: Player | null = null;

    @observable isFetching: boolean = false;
    @observable isSaving: boolean = false;

    fetchPlayers = flow(function* (this: CardGameStore) {
        this.isFetching = true;

        try {
            this._players = yield fetchPlayers();
        }
        catch (error) {
            //console.error('Could not fetch players');
        }
        finally {
            this.isFetching = false;
        }
    });

    savePlayerSelection = flow(function* (this: CardGameStore) {
        this.isSaving = true;

        try {
            const payload: PlayerSelectionSavingPayload = { player: this.player };
            const response = yield savePlayerSelection(payload);
            if (response.status !== HTTP_STATUS_RESPONSE.SUCCESS) {
                throw new Error('Error saving playerSelection')
            }
        }
        catch (error) {
            //console.error(error, 'Could not save playerSelection');
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
