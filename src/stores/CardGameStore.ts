import { observable } from 'mobx';
import { Player } from 'src/models/Player';

export class CardGameStore {
    @observable player: Player | null = null;
    @observable players: Array<Player> = [];
}

export default new CardGameStore();
