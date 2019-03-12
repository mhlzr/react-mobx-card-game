import { Player, PlayerType } from '../models/Player';

export const fetchPlayers = async (): Promise<Array<Player>> => {
    const response: Response = await fetch(
        '../static/data/players.json',
    );
    const json = await response.json();
    return json.players.map((player: PlayerType) => new Player(player));
}
