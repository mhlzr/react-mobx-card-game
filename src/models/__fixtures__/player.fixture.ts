import { Player } from "../Player";

export const name = 'Testname';
export const alias = 'Testalias';
export const asset = 'Testasset';

export const player: Player = new Player({
    name,
    alias,
    asset
});
