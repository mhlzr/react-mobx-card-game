import { Player } from '../models/Player';

export type RawPlayerData = {
    name: string;
    alias: string;
    asset: string;
}

export type PlayerSelectionSavingPayload = {
    player: Player | null;
}

export const fetchPlayers = async (): Promise<Array<Player>> => {
    const response: Response = await fetch(
        '../static/data/players.json',
    );
    const json = await response.json();
    return json.players.map((player: RawPlayerData) => new Player(player));
}

export const savePlayerSelection = async (payload: PlayerSelectionSavingPayload): Promise<any> => {
    // Mocking the storing request as we don't have a real endpoint
    const delay = (1000 + Math.random() * 2000) | 0; // 1-3 s delay
    const url = `https://www.mocky.io/v2/5c8cff2e31000082164c2569?mocky-delay=${delay}ms`;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(response => response.json());
}
