import { playersData } from "../../api/__fixtures__/players.fixture";
import { Player } from "../../models/Player";
import { CardGameStore } from "../CardGameStore";

export const cardGameStore: CardGameStore = {
    player: null,
    _players: [],
    playerSortation: null,
    isFetching: false,
    isSaving: false,
    fetchPlayers: jest.fn(),
    savePlayerSelection: jest.fn(),
    players: playersData.players.map(playerData => new Player(playerData))
};
