import { PlayerSelectionSavingPayload } from "../players";
import { player } from "../../models/__fixtures__/player.fixture";

export const playersData = {
    "players": [
        {
            "name": "Brianna Forbes",
            "alias": "Dreamlurk The Unstoppable",
            "asset": "Foghammer Lead"
        },
        {
            "name": "Darcy Candice Ball",
            "alias": "Crystaldash",
            "asset": "Secret Glowquake Gold"
        },
        {
            "name": "Hillary Gibbs",
            "alias": "Speedsoul",
            "asset": "Shifting Rainshadow Iron"
        },
        {
            "name": "Elva Becky Hammond",
            "alias": "Seekvenom The Mystic",
            "asset": "Valkyries' Opal Adamant"
        },
        {
            "name": "Enid Rose",
            "alias": "Coincurse The Ghoul",
            "asset": "Jewelevil Bronze Of Goddesses"
        },
        {
            "name": "Esmeralda Carrillo",
            "alias": "Skulldart",
            "asset": "Yellow Orichalcum Of Paladins"
        }
    ]
};

export const savePlayerPayload: PlayerSelectionSavingPayload = {
    player
}
