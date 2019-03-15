import { Player, PlayerType } from '../models/Player';

export const fetchPlayers = async (): Promise<Array<Player>> => {
    const response: Response = await fetch(
        '../static/data/players.json',
    );
    const json = await response.json();
    return json.players.map((player: PlayerType) => new Player(player));
}

export const savePlayerSelection = async (): Promise<any> => {
    // Mocking the storing request as we don't have a read endpoint
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000 + Math.random() * 2000) // 1-3 sec delay
    });
}
